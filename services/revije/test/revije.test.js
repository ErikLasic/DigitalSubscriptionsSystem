const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');
const { createRevija, getRevija, updateRevija, deleteRevija } = require('../controllers/revijeController');
const Revija = require('../models/revija');

// Load proto file
const packageDefinition = protoLoader.loadSync('./revije.proto', {});
const revijeProto = grpc.loadPackageDefinition(packageDefinition).revije;

describe('Revije Service Tests', () => {
  let server;
  let client;
  let testId;

  // Povečaj timeout za asinhroone operacije
  jest.setTimeout(15000); // 15 sekund

  beforeAll(async () => {
    // Start gRPC server
    server = new grpc.Server();
    server.addService(revijeProto.RevijeService.service, {
      CreateRevija: createRevija,
      GetRevija: getRevija,
      UpdateRevija: updateRevija,
      DeleteRevija: deleteRevija,
    });

    await new Promise((resolve) => {
      server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log('Test gRPC server running');
        resolve();
      });
    });

    // Set up gRPC client for testing
    client = new revijeProto.RevijeService('localhost:50051', grpc.credentials.createInsecure());

    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/revije', { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a sample Revija to get a valid ID
    const revija = new Revija({
      naziv: 'Test Revija',
      opis: 'Opis testne revije',
    });
    const savedRevija = await revija.save();
    testId = savedRevija._id.toString(); // Save the generated ID for use in other tests
  });

  afterAll(async () => {
    // Proper cleanup
    await new Promise((resolve) => server.tryShutdown(resolve));
    await mongoose.connection.close();
  });

  it('should create a new Revija', (done) => {
    const req = { naziv: 'Test Revija', opis: 'Opis testne revije' };

    client.CreateRevija(req, (error, response) => {
      expect(error).toBeNull();
      expect(response).toHaveProperty('id');
      expect(response.naziv).toBe('Test Revija');
      expect(response.opis).toBe('Opis testne revije');
      done();
    });
  });

  it('should get Revija by ID', (done) => {
    client.GetRevija({ id: testId }, (error, response) => {
      expect(error).toBeNull();
      expect(response).toHaveProperty('id');
      expect(response.naziv).toBeDefined();
      expect(response.opis).toBeDefined();
      done();
    });
  });

  it('should update a Revija', (done) => {
    const req = { id: testId, naziv: 'Posodobljena Revija', opis: 'Posodobljen opis' };

    client.UpdateRevija(req, (error, response) => {
      expect(error).toBeNull();
      expect(response.naziv).toBe('Posodobljena Revija');
      expect(response.opis).toBe('Posodobljen opis');
      done();
    });
  });

  it('should delete a Revija', (done) => {
    client.DeleteRevija({ id: testId }, (error, response) => {
      expect(error).toBeNull();
      expect(response).toHaveProperty('success', true);  // Expect success instead of message
      done();
    });
  });
});
