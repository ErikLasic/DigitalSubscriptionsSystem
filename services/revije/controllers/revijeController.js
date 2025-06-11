const mongoose = require('mongoose');
const winston = require('winston');
const Revija = require('../models/revija');

// Nastavitev logiranja z Winston
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'revijeController.log' })
  ]
});

const createRevija = async (call, callback) => {
  const { naziv, opis } = call.request;
  const revija = new Revija({ naziv, opis });

  try {
    await revija.save();
    logger.info(`Revija created: ${naziv}`);
    callback(null, revija);
  } catch (error) {
    logger.error(`Error creating Revija: ${error.message}`);
    callback(error);
  }
};

const getRevija = async (call, callback) => {
  const { id } = call.request;
  try {
    const revija = await Revija.findById(id);
    if (!revija) {
      logger.warn(`Revija not found with ID: ${id}`);
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Revija not found',
      });
    } else {
      logger.info(`Retrieved Revija with ID: ${id}`);
      callback(null, revija);
    }
  } catch (error) {
    logger.error(`Error fetching Revija with ID: ${id} - ${error.message}`);
    callback(error);
  }
};

const updateRevija = async (call, callback) => {
  const { id, naziv, opis } = call.request;
  try {
    const revija = await Revija.findByIdAndUpdate(id, { naziv, opis }, { new: true });
    if (!revija) {
      logger.warn(`Revija not found for update with ID: ${id}`);
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Revija not found',
      });
    } else {
      logger.info(`Updated Revija with ID: ${id}`);
      callback(null, revija);
    }
  } catch (error) {
    logger.error(`Error updating Revija with ID: ${id} - ${error.message}`);
    callback(error);
  }
};

const deleteRevija = async (call, callback) => {
  try {
    const revija = await Revija.findByIdAndDelete(call.request.id);
    if (revija) {
      logger.info(`Deleted Revija with ID: ${call.request.id}`);
      callback(null, { success: true });
    } else {
      logger.warn(`Revija not found for deletion with ID: ${call.request.id}`);
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Revija not found'
      });
    }
  } catch (err) {
    logger.error(`Error deleting Revija with ID: ${call.request.id} - ${err.message}`);
    callback({
      code: grpc.status.INTERNAL,
      details: 'Error deleting Revija'
    });
  }
};

const listRevije = async (call, callback) => {
  try {
    const revije = await Revija.find();
    const response = {
      revije: revije.map(r => ({
        id: r._id.toString(),
        naziv: r.naziv,
        opis: r.opis,
      }))
    };
    callback(null, response);
  } catch (error) {
    logger.error(`Error listing Revije: ${error.message}`);
    callback({
      code: grpc.status.INTERNAL,
      details: 'Could not fetch magazines'
    });
  }
};


module.exports = { createRevija, getRevija, updateRevija, deleteRevija, listRevije };
