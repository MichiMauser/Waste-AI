from typing import Any, Dict, Optional, Union
from pydantic import BaseModel, validator
from datetime import datetime, date



class ItemBase(BaseModel):
    owner_id: Optional[int] = None
    # Date of expiry is a string because it is easier to work with
    date_of_expiry: Optional[str] = None
    notes: Optional[str] = None

class ItemCreate(ItemBase):
    date_of_expiry: str 
    product_ean: str
    notes: str
    
class ItemUpdate(ItemBase):
    pass

class ItemInDBBase(ItemBase):
    item_id: Optional[int] = None

    class Config:
        orm_mode = True

class ItemInDB(ItemInDBBase):
    pass

class Item(ItemInDBBase):
    date_of_expiry: date
