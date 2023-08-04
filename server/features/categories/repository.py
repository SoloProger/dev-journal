from sqlalchemy import select
from sqlalchemy.orm import Session

from database import Category


class CategoriesRepository:
    def all(self, db: Session):
        return db.scalars(select(Category)).all()

    def one(self, id: int, db: Session):
        current_user = db.scalars(select(Category).filter(Category.id == id)).first()

        return current_user
