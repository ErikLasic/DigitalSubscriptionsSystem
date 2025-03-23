const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Naložite .proto datoteko in nastavite gRPC paket
const packageDefinition = protoLoader.loadSync('./revije.proto', {});
const revijeProto = grpc.loadPackageDefinition(packageDefinition).revije;

// Povežite gRPC odjemalca s strežnikom
const client = new revijeProto.RevijeService('localhost:50051', grpc.credentials.createInsecure());

// Funkcija za ustvarjanje nove revije
const createRevija = (naziv, opis) => {
  return new Promise((resolve, reject) => {
    client.CreateRevija({ naziv, opis }, (error, response) => {
      if (error) {
        reject('Error creating Revija: ' + error);
      } else {
        console.log('Revija created:', response);
        resolve(response.id); // Vrne ID ustvarjene revije
      }
    });
  });
};

// Funkcija za pridobivanje revije po ID-ju
const getRevija = (revijaId) => {
  return new Promise((resolve, reject) => {
    client.GetRevija({ id: revijaId }, (error, response) => {
      if (error) {
        reject('Error getting Revija: ' + error);
      } else {
        console.log('Revija details:', response);
        resolve(response); // Vrne podrobnosti revije
      }
    });
  });
};

// Funkcija za posodobitev revije
const updateRevija = (revijaId, naziv, opis) => {
  return new Promise((resolve, reject) => {
    client.UpdateRevija({ id: revijaId, naziv, opis }, (error, response) => {
      if (error) {
        reject('Error updating Revija: ' + error);
      } else {
        console.log('Revija updated:', response);
        resolve(response); // Vrne posodobljeno revijo
      }
    });
  });
};

// Funkcija za brisanje revije
const deleteRevija = (revijaId) => {
  return new Promise((resolve, reject) => {
    client.DeleteRevija({ id: revijaId }, (error, response) => {
      if (error) {
        reject('Error deleting Revija: ' + error);
      } else {
        console.log('Revija deleted:', response);
        resolve(response); // Potrdi brisanje
      }
    });
  });
};

// Funkcija, ki zaporedno kliče vse metode (kreira, posodobi, pridobi in izbriše revijo)
const testRevijaMethods = async () => {
  try {
    // Klic za ustvarjanje nove revije
    const revijaId = await createRevija('Revija 1', 'Opis revije');

    const revija2Id = await createRevija('Revija 2', 'Opis revije 2');
    
    // Klic za pridobitev revije
    await getRevija(revijaId);

    // Klic za pridobitev revije
    await getRevija(revija2Id);
    
    // Klic za posodobitev revije
    await updateRevija(revijaId, 'Posodobljena Revija', 'Posodobljen opis revije');
    
    // Klic za brisanje revije
    await deleteRevija(revijaId);
  } catch (error) {
    console.error('Napaka med izvajanjem metod:', error);
  }
};

// Klic funkcije za preizkus vseh metod
testRevijaMethods();
