import config from "../config.js";
import PersonasFactoryDAO from "../model/daos/personasFactory.js";
import Personas from "../model/models/personas.js";

class ServicioPersonas {
  constructor() {
    this.personasDAO = PersonasFactoryDAO.get(config.PERS);
  }

  async obtenerPersonas(id) {
    return await this.personasDAO.obtenerPersonas(id);
  }

  async guardarPersonas(personas) {
    ServicioPersonas.validarPersonas(personas, true);
    return await this.personasDAO.guardarPersonas(personas);
  }

  async actualizarPersonas(id, personas) {
    ServicioPersonas.validarPersonas(personas, false);
    return await this.personasDAO.actualizarPersonas(id, personas);
  }

  async borrarPersonas(id) {
    return await this.personasDAO.borrarPersonas(id);
  }

  static validarPersonas(personas, required) {
    try {
      Personas.validate(personas, required);
    } catch (error) {
      throw new Error(
        `La persona tiene un formato invalido o falta algún dato: ${error.details[0].message}`
      );
    }
  }
}

export default ServicioPersonas;
