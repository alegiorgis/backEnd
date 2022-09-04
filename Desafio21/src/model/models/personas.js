import Joi from "joi";

class Personas {
  constructor(nombre, apellido, edad, dni, email, visto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.email = email;
    this.visto = visto;
  }

  static validate(personas, required) {
    const PersonasSchema = Joi.object({
      nombre: required ? Joi.string().required() : Joi.string(),
      apellido: required ? Joi.string().required() : Joi.string(),
      edad: required ? Joi.string().required() : Joi.string(),
      dni: required ? Joi.string().required() : Joi.string(),
      email: required ? Joi.string().required() : Joi.string(),
      visto: required ? Joi.boolean().required() : Joi.boolean(),
    });

    const { error } = PersonasSchema.validate(personas);
    if (error) {
      throw error;
    }
  }
}
export default Personas;
