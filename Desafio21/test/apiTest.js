import PersonasMemDAO from "../src/model/daos/personasMemDao.js";
import assert from "assert";

describe("test PersonasMemDAO", function () {
  it("Deberia traer la lista de personas vacia", function () {
    const personasMemDAO = new PersonasMemDAO();
    assert.strictEqual(personasMemDAO.obtenerPersonas().length, 0);
  });

  it("Deberia agregar una persona", function () {
    const personasMemDAO = new PersonasMemDAO();
    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });
    assert.deepStrictEqual(personasMemDAO.obtenerPersonas(), [
      {
        nombre: "Juan Pablo",
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        id: 1,
      },
    ]);
    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });
    assert.strictEqual(personasMemDAO.obtenerPersonas().length, 2);
    assert.deepStrictEqual(personasMemDAO.obtenerPersonas(), [
      {
        nombre: "Juan Pablo",
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        id: 1,
      },
      {
        nombre: "Juan Pablo",
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        id: 2,
      },
    ]);
  });

  it("Deberia eliminar una persona por id", function () {
    const personasMemDAO = new PersonasMemDAO();

    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });

    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });
    assert.deepStrictEqual(personasMemDAO.borrarPersonas(1), [
      {
        nombre: "Juan Pablo",
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        id: 1,
      },
    ]);
  });

  it("Deberia actualizar una persona por id", function () {
    const personasMemDAO = new PersonasMemDAO();

    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });

    personasMemDAO.guardarPersonas({
      nombre: "Juan Pablo",
      apellido: "Ribero Mazzoni",
      edad: "33",
      dni: "12345678",
      email: "jp@gmail.com",
    });

    assert.deepStrictEqual(
      personasMemDAO.actualizarPersonas({
        nombre: "Francisco",
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        id: 1,
      }),
      {
        id: 1,
        apellido: "Ribero Mazzoni",
        edad: "33",
        dni: "12345678",
        email: "jp@gmail.com",
        nombre: "Francisco",
      }
    );
  });
});
