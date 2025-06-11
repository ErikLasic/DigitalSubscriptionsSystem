const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');
const winston = require('winston');
const { createRevija, getRevija, updateRevija, deleteRevija, listRevije } = require('./controllers/revijeController');

// Nastavitev logiranja z Winston
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

// Nalaganje proto datoteke
const packageDefinition = protoLoader.loadSync('./revije.proto', {});
const revijeProto = grpc.loadPackageDefinition(packageDefinition).revije;

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://eriklasic:j0LivIehDD0I38pZ@revije.y2asa.mongodb.net/revije?retryWrites=true&w=majority&appName=revije';

// Povezava z MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    logger.info('MongoDB connected');
  })
  .catch(err => {
    logger.error('MongoDB connection error:', err);
  });

// Nastavitev gRPC strežnika
const server = new grpc.Server();
server.addService(revijeProto.RevijeService.service, {
  CreateRevija: createRevija,
  GetRevija: getRevija,
  UpdateRevija: updateRevija,
  DeleteRevija: deleteRevija,
  ListRevije: listRevije
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  logger.info('gRPC server is running on port 50051');
});
