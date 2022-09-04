import personasDTO from "../dtos/personasDto.js";
import PersonasBaseDAO from "./personasBaseDao.js";

class PersonasMemDAO extends PersonasBaseDAO {
  constructor() {
    super();
    this.personas = [];
  }

  obtenerPersonas = async (_id) => {
    try {
      if (_id) {
        const index = this.personas.findIndex((n) => n._id == _id);
        return index >= 0 ? [this.personas[index]] : [];
      } else {
        return this.personas;
      }
    } catch (error) {
      console.log("Error al obtener personas en DAO:", error);
      return [];
    }
  };

  guardarPersonas = async (personas) => {
    try {
      const _id = this.getNext_Id(this.personas);
      const date = new Date().toLocaleDateString();
      const personasGuardadas = personasDTO(personas, _id, date);
      this.personas.push(personasGuardadas);

      return personasGuardadas;
    } catch (error) {
      console.log("Error al guardar personas en DAO:", error);
      return {};
    }
  };

  actualizarPersonas = async (_id, personas) => {
    try {
      const date = new Date().toLocaleDateString();
      const nuevasPersonas = personasDTO(personas, _id, date);

      const index = this.getIndex(_id, this.personas);
      const personasAhora = this.personas[index] || {};

      const personasActualizadas = { ...personasAhora, ...nuevasPersonas };

      index >= 0
        ? this.personas.splice(index, 1, personasActualizadas)
        : this.personas.push(personasActualizadas);

      return personasActualizadas;
    } catch (error) {
      console.log("Error al actualizar personas en DAO:", error);
      return {};
    }
  };

  borrarPersonas = async (_id) => {
    try {
      const index = this.getIndex(_id, this.personas);
      const personasBorradas = this.personas.splice(index, 1)[0];

      return personasBorradas;
    } catch (error) {
      console.log("Error al borrar personas en DAO:", error);
      return {};
    }
  };
}

export default PersonasMemDAO;
