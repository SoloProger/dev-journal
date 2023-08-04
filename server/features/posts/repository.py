from sqlalchemy import select
from sqlalchemy.orm import Session
from database.models.post import Post


class PostsRepository:
    def all(self, db: Session):
        return db.scalars(select(Post)).all()

    def one(self, id: int, db: Session):
        current_user = db.scalars(select(Post).filter(Post.id == id)).first()

        return current_user
