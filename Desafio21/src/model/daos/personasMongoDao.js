import personasDTO from "../dtos/personasDto.js";
import PersonasBaseDAO from "./personasBaseDAO.js";
import config from "../../config.js";
import mongodb from "mongodb";

const { MongoClient, ObjectId } = mongodb;

class PersonasMongoDAO extends PersonasBaseDAO {
  constructor(database, collection) {
    super();
    (async () => {
      console.log("Conectando a la base de datos...");
      const connection = await MongoClient.connect(config.db.connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = connection.db(database);
      this._collection = db.collection(collection);

      console.log("Base de datos conectada");
    })();
  }

  obtenerPersonas = async (_id) => {
    try {
      if (_id) {
        const personas = await this._collection.findOne({ _id: ObjectId(_id) });
        return [personas];
      } else {
        const personas = await this._collection.find({}).toArray();
        return personas;
      }
    } catch (error) {
      console.log("Error al obtener personas en DAO:", error);
    }
  };

  guardarPersonas = async (personas) => {
    try {
      await this._collection.insertOne(personas);
      return [personas];
    } catch (error) {
      console.log("Error al guardar personas en DAO:", error);
    }
  };

  actualizarPersonas = async (_id, personas) => {
    try {
      await this._collection.updateOne({ _id: ObjectId(_id) }, { $set: personas });
      return personas;
    } catch (error) {
      console.log("Error al actualizar personas en DAO:", error);
      return personas;
    }
  };

  borrarPersonas = async (_id) => {
    const personasBorradas = personasDTO({}, _id, null);
    try {
      await this._collection.deleteOne({ _id: ObjectId(_id) });
      return personasBorradas;
    } catch (error) {
      console.log("Error al borrar personas en DAO:", error);
      return personasBorradas;
    }
  };
}

export default PersonasMongoDAO;
