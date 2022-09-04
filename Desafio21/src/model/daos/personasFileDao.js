import fs from "fs";
import personasDTO from "../dtos/personasDto.js";
import PersonasBaseDAO from "./personasBaseDAO.js";

class PersonasFileDAO extends PersonasBaseDAO {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  async read() {
    return JSON.parse(await fs.promises.readFile(this.fileName, "utf-8"));
  }
  async save(personas) {
    await fs.promises.writeFile(
      this.fileName,
      JSON.stringify(personas, null, "\t")
    );
  }

  obtenerPersonas = async (_id) => {
    try {
      if (_id) {
        const personas = await this.read();
        const index = personas.findIndex((n) => n._id == id);
        return index >= 0 ? [personas[index]] : [];
      } else {
        return await this.read();
      }
    } catch (error) {
      console.log("Error al obtener personas en DAO:", error);
      await this.save([]);
      return [];
    }
  };

  guardarPersonas = async (personas) => {
    try {
      const personas = await this.read();
      const _id = this.getNext_Id(personas);
      const date = new Date().toLocaleDateString();
      const personasGuardadas = personasDTO(personas, _id, date);
      personas.push(personasGuardadas);
      await this.save(personas);
      return personasGuardadas;
    } catch (error) {
      console.log("Error al guardar personas en DAO:", error);
      return {};
    }
  };

  actualizarPersonas = async (personaParaActualizar) => {
    try {
      const personas = await this.read();
      const date = new Date().toLocaleDateString();
      const nuevasPersonas = personasDTO(personaParaActualizar, _id, date);
      const index = this.getIndex(id, personas);
      const personasAhora = this.personas[index] || {};
      const personasActualizadas = { ...personasAhora, ...nuevasPersonas };
      index >= 0
        ? this.personas.splice(index, 1, personasActualizadas)
        : this.personas.push(personasActualizadas);
      await this.save(personas);
      return personasActualizadas;
    } catch (error) {
      console.log("Error al actualizar personas en DAO:", error);
      return {};
    }
  };

  borrarPersonas = async (personas) => {
    try {
      const personas = await this.read();
      const index = this.getIndex(id, personas);
      const personasBorradas = this.personas.splice(index, 1)[0];
      await this.save(personas);
      return personasBorradas;
    } catch (error) {
      console.log("Error al borrar personas en DAO:", error);
      return {};
    }
  };
}

export default PersonasFileDAO;
