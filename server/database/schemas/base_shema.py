from datetime import datetime

from pydantic import BaseModel


class Schema(BaseModel):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
