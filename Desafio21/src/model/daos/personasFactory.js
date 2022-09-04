import PersonasMemDAO from "./personasMemDao.js";
import PersonasFileDAO from "./personasFileDao.js";
import PersonasMongoDAO from "./personasMongoDao.js";
import config from "../../config.js";

class PersonasFactoryDAO {
  static get(type) {
    switch (type) {
      case "MEM":
        return new PersonasMemDAO();
      case "FILE":
        return new PersonasFileDAO(process.cwd() + "/personas.json");
      case "MONGO":
        return new PersonasMongoDAO(config.db.name, config.db.collection);
      default:
        return new PersonasMemDAO();
    }
  }
}

export default PersonasFactoryDAO;
