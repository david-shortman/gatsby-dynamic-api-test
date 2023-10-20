from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_products():
    return {"products": [{"name": "Foo"}, {"name": "Bar"}]}