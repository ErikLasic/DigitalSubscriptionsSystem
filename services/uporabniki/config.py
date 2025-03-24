import os
import secrets

secret_key = secrets.token_hex(32)

class Config:
    # Nastavitve za MongoDB povezavo
    MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://eriklasic:j0LivIehDD0I38pZ@revije.y2asa.mongodb.net/uporabniki?retryWrites=true&w=majority&appName=revije")
    # Nastavitve za skrivni ključ JWT
    SECRET_KEY = os.getenv("SECRET_KEY", secret_key)
