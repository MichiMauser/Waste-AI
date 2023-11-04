from fastapi import APIRouter

from app.api.api_v1.endpoints import login, users 

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])