from .base_shema import Schema
from .category import CategorySchema


class PostSchema(Schema):
    title: str
    description: str
    image: str
    categories: list[CategorySchema] = []
