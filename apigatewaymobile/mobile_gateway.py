from fastapi import FastAPI, Request, HTTPException, Header
from fastapi.responses import JSONResponse
import httpx
import grpc
import revije_pb2
import revije_pb2_grpc

app = FastAPI()

# Naslovi mikrostoritev
USERS_SERVICE_URL = 'http://localhost:5000'  # REST uporabniki
SUBSCRIPTIONS_SERVICE_URL = 'http://localhost:8080'  # REST naročnine
REVIIJE_GRPC_ADDRESS = 'localhost:50051'  # gRPC revije

# grpc kanal in stub
channel = grpc.insecure_channel(REVIIJE_GRPC_ADDRESS)
revije_stub = revije_pb2_grpc.RevijeServiceStub(channel)

# --- Uporabniki ---
@app.get("/api/users/{user_id}")
async def get_user(user_id: str, authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization token missing")
    
    headers = {"Authorization": authorization}
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{USERS_SERVICE_URL}/me", headers=headers)
    
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 401:
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        raise HTTPException(status_code=404, detail="User not found")

# --- Naročnine ---
@app.get("/api/subscriptions/{subscription_id}")
async def get_subscription(subscription_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{SUBSCRIPTIONS_SERVICE_URL}/subscriptions/{subscription_id}")
    
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=404, detail="Subscription not found")

# --- Revije gRPC metode ---
@app.post("/api/magazines")
async def create_magazine(request: Request):
    data = await request.json()
    grpc_request = revije_pb2.CreateRevijaRequest(
        naziv=data.get("naziv"),
        opis=data.get("opis")
    )
    revija = revije_stub.CreateRevija(grpc_request)
    return {
        "id": revija.id,
        "naziv": revija.naziv,
        "opis": revija.opis
    }

@app.get("/api/magazines/{magazine_id}")
async def get_magazine(magazine_id: str):
    grpc_request = revije_pb2.GetRevijaRequest(id=magazine_id)
    try:
        revija = revije_stub.GetRevija(grpc_request)
        return {
            "id": revija.id,
            "naziv": revija.naziv,
            "opis": revija.opis
        }
    except grpc.RpcError:
        raise HTTPException(status_code=404, detail="Magazine not found")

@app.put("/api/magazines/{magazine_id}")
async def update_magazine(magazine_id: str, request: Request):
    data = await request.json()
    grpc_request = revije_pb2.UpdateRevijaRequest(
        id=magazine_id,
        naziv=data.get("naziv"),
        opis=data.get("opis")
    )
    try:
        revija = revije_stub.UpdateRevija(grpc_request)
        return {
            "id": revija.id,
            "naziv": revija.naziv,
            "opis": revija.opis
        }
    except grpc.RpcError:
        raise HTTPException(status_code=404, detail="Magazine not found or update failed")

@app.delete("/api/magazines/{magazine_id}")
async def delete_magazine(magazine_id: str):
    grpc_request = revije_pb2.DeleteRevijaRequest(id=magazine_id)
    try:
        response = revije_stub.DeleteRevija(grpc_request)
        if response.success:
            return {"message": "Magazine deleted successfully"}
        else:
            raise HTTPException(status_code=400, detail="Deletion failed")
    except grpc.RpcError:
        raise HTTPException(status_code=404, detail="Magazine not found or deletion failed")
