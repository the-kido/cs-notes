https://fastapi.tiangolo.com/virtual-environments/
Quite useful!

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
```

 `fastapi dev main.py`  runs the live server



#### **`uvicorn`**
- This is another library.