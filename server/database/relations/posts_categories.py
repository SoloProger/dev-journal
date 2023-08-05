from sqlalchemy import ForeignKey, Table, Column

from database import Base

posts_categories = Table(
    'posts_categories',
    Base.metadata,
    Column('post_id', ForeignKey("posts.id")),
    Column('category_id', ForeignKey("categories.id"))
)
