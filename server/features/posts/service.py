from typing import Sequence

from sqlalchemy.orm import Session

from database.models.post import Post
from database.schemas.post import PostSchema
from .repository import PostsRepository


class PostsService:
    def __init__(self) -> None:
        self.__repository = PostsRepository()

    def get_users(self, db: Session):
        return self.__repository.all(db)

    def get_user(self, id: int, db: Session) -> PostSchema:
        return self.__repository.one(id, db)
