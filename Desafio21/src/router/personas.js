import express from "express";
import ControladorPersonas from "../controllers/personas.js";
const router = express.Router();

class RouterPersonas {
  constructor() {
    this.controladorPersonas = new ControladorPersonas();
  }

  start() {
    router.get("/:id", this.controladorPersonas.obtenerPersonas);
    router.post("/", this.controladorPersonas.guardarPersonas);
    router.put("/:id", this.controladorPersonas.actualizarPersonas);
    router.delete("/:id", this.controladorPersonas.borrarPersonas);
    return router;
  }
}

export default RouterPersonas;
