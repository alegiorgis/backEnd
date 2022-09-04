import personasDTO from "../dtos/personasDto.js";
import PersonasBaseDAO from "./personasBaseDao.js";

class PersonasMemDAO extends PersonasBaseDAO {
  constructor() {
    super();
    this.personas = [];
  }

  obtenerPersonas() {
    return [...this.personas];
  }

  guardarPersonas(persona) {
    let nuevoId =
      this.personas.length == 0
        ? 1
        : this.personas[this.personas.length - 1].id + 1;

    const nuevaPersona = { ...persona, id: nuevoId };
    this.personas.push(nuevaPersona);
    return nuevaPersona;
  }

  actualizarPersonas(id) {
    const index = this.personas.findIndex((p) => p.id == id.id);
    if (index == -1)
      throw new Error(`Error actualizarPersonas en DAO: persona no encontrada`);
    this.personas[index] = id;

    return id;
  }

  borrarPersonas(id) {
    const index = this.personas.findIndex((p) => p.id == id);
    if (index == -1)
      throw new Error(`Error borrarPersonas en DAO: persona no encontrada`);
    return this.personas.splice(index, 1);
  }
}

export default PersonasMemDAO;
