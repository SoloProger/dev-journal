from fastapi import FastAPI, Depends, Request
from fastapi.responses import JSONResponse

from config.database import get_db
from routes.posts import router

app = FastAPI(dependencies=[Depends(get_db)])

app.include_router(router, prefix='/posts', tags=["Posts"])


@app.exception_handler(Exception)
async def exception_handler(request: Request, exc: Exception):
    error_message = f"Unexpected error occurred: {exc}"
    return JSONResponse(status_code=500, content={"detail": error_message})


@app.get('/')
def ping():
    return {"message": "pong"}
