# Desafio 20 - Mejorar la arquitectura de nuestra API

Retomemos nuestro trabajo para implementar los patrones de diseño Factory, DAO y DTO.

## Consigna

Modificar la capa de persistencia incorporando los conceptos de Factory, DAO, y DTO.

Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.

El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.

Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.

Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.

Implementar el patrón Repository para la persistencia de productos y mensajes.

## Uso

1. Forkeá y cloná el branch _desafio20_.
2. En la terminal, parado en la raíz del proyecto, corré el siguiente comando para instalar todas las dependencias necesarias.

```
npm i
```

3. Parado en la raíz del proyecto, corré el comando.

```
npm start
```

## Archivo _.env_

En este archivo podés cambiar el tipo de persistencia _MEM_, _FILE_, _MONGO_, por defecto está seteado en _MONGO_.

## Rutas para probar con Postman

- GET (**/personas/:id**) → Obtener una persona por id.
- POST (**/personas**) → Agregar una persona.
- PUT (**/personas/:id**) → Actualizar una persona por id.
- DELETE (**/personas/:id**) → Borrar una persona por id.

# Autor
Giorgis Alejandro

# Reconocimientos
Equipo CoderHouse
