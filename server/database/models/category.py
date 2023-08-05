from sqlalchemy import Column, String

from .base_model import BaseModel


class Category(BaseModel):
    __tablename__ = 'categories'

    name: str = Column(String, nullable=False)
