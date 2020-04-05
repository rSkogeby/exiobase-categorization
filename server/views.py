from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def Index():
    return {'response': 'Initial Setup'}
