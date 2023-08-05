from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm import Session

from config.database import get_db
from database import PostSchema
from features import PostsService

router = APIRouter()

service = PostsService()


@router.get('', response_model=list[PostSchema])
def posts(db: Session = Depends(get_db)):
    return service.get_users(db)


@router.get('/{id}', response_model=PostSchema)
def post(id: int, db: Session = Depends(get_db)):
    return service.get_user(id, db)
