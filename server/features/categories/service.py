from typing import Sequence

from sqlalchemy.orm import Session

from database.schemas.post import PostSchema
from .repository import CategoriesRepository


class CategoriesService:
    def __init__(self) -> None:
        self.__repository = CategoriesRepository()

    def get_categories(self, db: Session):
        return self.__repository.all(db)

    def get_category(self, id: int, db: Session) -> PostSchema:
        return self.__repository.one(id, db)
