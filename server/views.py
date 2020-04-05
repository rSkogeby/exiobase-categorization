from fastapi import FastAPI

from models.datahandler import load_data

app = FastAPI()

@app.get('/')
def Index():
    return {'response': 'Initial Setup'}

@app.get('/api/get/data/{name}', status_code=200)
def get_data(name: str):
    return {'response': load_data(name)}
