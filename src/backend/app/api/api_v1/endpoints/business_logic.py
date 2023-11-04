from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic.networks import EmailStr
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from app.core.config import settings
from app.models.items_products import items_products
#from app.utils import send_new_account_email

router = APIRouter()

@router.post('/create_product', response_model=schemas.Product)
def create_product(
    *,
    db: Session = Depends(deps.get_db),
    product_in: schemas.ProductCreate,
) -> Any:
    """
    Create new product.
    """
    product = crud.product.create(db, obj_in=product_in)
    return product

@router.get('/get_all_products', response_model=List[schemas.Product])
def get_all_products(
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all products.
    """
    products = crud.product.get_all(db)
    return products

@router.post('/find_product', response_model=schemas.Product)
def find_product(
    *,
    db: Session = Depends(deps.get_db),
    product_ean: str,
) -> Any:
    """
    Find product by id.
    """
    product = crud.product.get_by_ean(db, ean=product_ean)

    # Check if the product exists in the database
    # if it doesn't exist, search for it in the external API (TODO)
    if not product:
        raise HTTPException(
            status_code=404,
            detail="The product doesn't exist in the database"
        ) 

    # If it exists, return it
    return product

# Get all the products of the current user
@router.get('/get_items', response_model=schemas.Item)
def get_items(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get all items.
    """
    items = crud.item.get_all_by_user(db, user_id=current_user.id)
    return items

@router.post('/add_item', response_model=schemas.Item)
def add_item(
    *,
    db: Session = Depends(deps.get_db),
    item_in: schemas.ItemCreate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Add new item.
    """

    # Check if the product exists in the database
    product = crud.product.get_by_ean(db, ean=item_in.product_ean)
    if not product:
        raise HTTPException(
            status_code=404,
            detail="The product doesn't exist in the database"
        )

    # Create the item
    item = crud.item.create(db=db, obj_in=item_in, owner_id=current_user.id)
    
    # Create the relationship between the item and the product
    product_id = crud.product.get_by_ean(db, ean=item_in.ean).id

    # Add the item product relationship to the database
    crud.items_products.create(db=db, item_id=item.id, product_id=product_id)

    # Add the item product relationship to the database
    db.execute(items_products.insert().values(item_id=item.id, product_id=product_id))

    return item

@router.post('/delete_item/{item_id}', response_model=schemas.Item)
def delete_item(
    *,
    db: Session = Depends(deps.get_db),
    item_id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete item.
    """
    item = crud.item.get(db, id=item_id)
    if not item:
        raise HTTPException(
            status_code=404,
            detail="The item doesn't exist in the database"
        )
    if item.user_id != current_user.id or current_user.role != "admin":
        raise HTTPException(
            status_code=400,
            detail="The user doesn't have enough privileges"
        )
    item = crud.item.remove(db=db, id=item_id)
    return item