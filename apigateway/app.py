from flask import Flask, jsonify, request
import requests
import grpc
import revije_pb2
import revije_pb2_grpc
from flask_cors import CORS  # uvozi CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:8081"])  # dovoli CORS samo iz tvojega frontenda

# Naslovi mikrostoritev
USERS_SERVICE_URL = 'http://localhost:5000'  # REST uporabniki
SUBSCRIPTIONS_SERVICE_URL = 'http://localhost:8080'  # REST naročnine
REVIIJE_GRPC_ADDRESS = 'localhost:50051'  # gRPC revije

# gRPC kanal in stub
channel = grpc.insecure_channel(REVIIJE_GRPC_ADDRESS)
revije_stub = revije_pb2_grpc.RevijeServiceStub(channel)

# --- tvoje obstoječe rute ostanejo enake ---

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    response = requests.post(f'{USERS_SERVICE_URL}/register', json=data)
    return jsonify(response.json()), response.status_code

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    response = requests.post(f'{USERS_SERVICE_URL}/login', json=data)
    return jsonify(response.json()), response.status_code

@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id):
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({'error': 'Authorization token missing'}), 401

    headers = {'Authorization': auth_header}
    response = requests.get(f'{USERS_SERVICE_URL}/me', headers=headers)

    if response.status_code == 200:
        return jsonify(response.json())
    elif response.status_code == 401:
        return jsonify({'error': 'Unauthorized'}), 401
    else:
        return jsonify({'error': 'User not found'}), 404

@app.route('/api/subscriptions', methods=['POST'])
def create_subscription():
    data = request.json
    response = requests.post(f'{SUBSCRIPTIONS_SERVICE_URL}/subscriptions', json=data)
    return jsonify(response.json()), response.status_code

@app.route('/api/subscriptions/<subscription_id>', methods=['GET'])
def get_subscription(subscription_id):
    response = requests.get(f'{SUBSCRIPTIONS_SERVICE_URL}/subscriptions/{subscription_id}')
    if response.status_code == 200:
        return jsonify(response.json())
    return jsonify({'error': 'Subscription not found'}), 404

@app.route('/api/subscriptions/<subscription_id>', methods=['DELETE'])
def delete_subscription(subscription_id):
    response = requests.delete(f'{SUBSCRIPTIONS_SERVICE_URL}/subscriptions/{subscription_id}')
    if response.status_code == 200 or response.status_code == 204:
        return jsonify({'message': 'Subscription deleted'})
    return jsonify({'error': 'Subscription not found or deletion failed'}), response.status_code

@app.route('/api/subscriptions/user/<user_id>', methods=['GET'])
def get_subscriptions_by_user(user_id):
    response = requests.get(f'{SUBSCRIPTIONS_SERVICE_URL}/subscriptions/user/{user_id}')
    if response.status_code == 200:
        return jsonify(response.json())
    return jsonify({'error': 'No subscriptions found for user'}), response.status_code

@app.route('/api/allMagazines', methods=['GET'])
def list_magazines():
    try:
        response = revije_stub.ListRevije(revije_pb2.ListRevijeRequest())
        magazines = [{'id': r.id, 'naziv': r.naziv, 'opis': r.opis} for r in response.revije]
        return jsonify(magazines)
    except grpc.RpcError:
        return jsonify({'error': 'Could not fetch magazines'}), 500

@app.route('/api/magazines', methods=['POST'])
def create_magazine():
    data = request.json
    grpc_request = revije_pb2.CreateRevijaRequest(
        naziv=data.get('naziv'),
        opis=data.get('opis')
    )
    revija = revije_stub.CreateRevija(grpc_request)
    return jsonify({
        'id': revija.id,
        'naziv': revija.naziv,
        'opis': revija.opis
    }), 201

@app.route('/api/magazines/<magazine_id>', methods=['GET'])
def get_magazine(magazine_id):
    grpc_request = revije_pb2.GetRevijaRequest(id=magazine_id)
    try:
        revija = revije_stub.GetRevija(grpc_request)
        return jsonify({
            'id': revija.id,
            'naziv': revija.naziv,
            'opis': revija.opis
        })
    except grpc.RpcError:
        return jsonify({'error': 'Magazine not found'}), 404

@app.route('/api/magazines/<magazine_id>', methods=['PUT'])
def update_magazine(magazine_id):
    data = request.json
    grpc_request = revije_pb2.UpdateRevijaRequest(
        id=magazine_id,
        naziv=data.get('naziv'),
        opis=data.get('opis')
    )
    try:
        revija = revije_stub.UpdateRevija(grpc_request)
        return jsonify({
            'id': revija.id,
            'naziv': revija.naziv,
            'opis': revija.opis
        })
    except grpc.RpcError:
        return jsonify({'error': 'Magazine not found or update failed'}), 404

@app.route('/api/magazines/<magazine_id>', methods=['DELETE'])
def delete_magazine(magazine_id):
    grpc_request = revije_pb2.DeleteRevijaRequest(id=magazine_id)
    try:
        response = revije_stub.DeleteRevija(grpc_request)
        if response.success:
            return jsonify({'message': 'Magazine deleted successfully'})
        else:
            return jsonify({'error': 'Deletion failed'}), 400
    except grpc.RpcError:
        return jsonify({'error': 'Magazine not found or deletion failed'}), 404

if __name__ == '__main__':
    app.run(port=8000, debug=True)
