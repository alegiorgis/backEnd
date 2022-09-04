import ServicioPersonas from "../services/personas.js";

class ControladorPersonas {
  constructor() {
    this.servicioPersonas = new ServicioPersonas();
  }

  obtenerPersonas = async (req, res) => {
    try {
      const id = req.params.id;
      const personas = await this.servicioPersonas.obtenerPersonas(id);
      res.send(personas);
    } catch (error) {
      console.log("Error al obtener personas:", error);
    }
  };

  guardarPersonas = async (req, res) => {
    try {
      const personas = req.body;
      const personasGuardadas = await this.servicioPersonas.guardarPersonas(personas);
      res.json(personasGuardadas);
    } catch (error) {
      console.log("Error al guardar personas:", error);
    }
  };

  actualizarPersonas = async (req, res) => {
    try {
      const personas = req.body;
      const id = req.params.id;
      const personasActualizadas = await this.servicioPersonas.actualizarPersonas(id, personas);
      res.json(personasActualizadas);
    } catch (error) {
      console.log("Error al actualizar personas:", error);
    }
  };

  borrarPersonas = async (req, res) => {
    try {
      const id = req.params.id;
      const personasBorradas = await this.servicioPersonas.borrarPersonas(id);
      res.json(personasBorradas);
    } catch (error) {
      console.log("Error al borrar personas:", error);
    }
  };
}

export default ControladorPersonas;
