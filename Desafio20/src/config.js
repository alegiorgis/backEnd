import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  //MEM - FILE - MONGO
  PERS: process.env.PERS || "MEM",
  db: {
    name: "desafio20",
    collection: "personas",
    connectString: "mongodb://127.0.0.1/",
    projection: { __v: 0 },
  },
};
