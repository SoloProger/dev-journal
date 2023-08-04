from typing import List

from sqlalchemy import Column, String
from sqlalchemy.orm import relationship, Mapped

from .base_model import BaseModel
from .category import Category
from ..relations.posts_categories import posts_categories


class Post(BaseModel):
    __tablename__ = 'posts'

    title: str = Column(String, nullable=False)
    description: str = Column(String)
    image: str = Column(String)
    categories: Mapped[List[Category]] = relationship(secondary=posts_categories)
