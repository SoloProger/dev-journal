from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm import Session

from config.database import get_db
from database import CategorySchema
from features import CategoriesService

router = APIRouter()

service = CategoriesService()


@router.get('', response_model=list[CategorySchema])
def categories(db: Session = Depends(get_db)):
    return service.get_categories(db)


@router.get('/{id}', response_model=CategorySchema)
def category(id: int, db: Session = Depends(get_db)):
    return service.get_category(id, db)
