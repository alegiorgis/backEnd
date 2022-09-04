import config from "./config.js";
import express from "express";
import cors from "cors";
import RouterPersonas from "./router/personas.js";

const app = express();


app.use(express.json());
app.use(cors());

const routerPersonas = new RouterPersonas();

app.use("/personas", routerPersonas.start());

const PORT = config.PORT;

const server = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT} (Persistencia en ${config.PERS})`);
});
server.on("error", (error) => console.error("Servidor express con error: ", error));
