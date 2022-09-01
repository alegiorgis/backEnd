# Desafio 15 - Servidor con balance de carga

## Consigna

1. Tomando como base el proyecto que vamos realizando, agregar un parámetro más en la ruta de comando que permita ejecutar al servidor en modo fork o cluster. Dicho parámegro será "FORK" en el primer paso y "CLUSTER" en el segundo, y de no pasarlo, el servidor iniciará en modo fork.

    - Agregar en la vista info, el número de procesadores presentes en el servidor.

    - Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el númerp de procesos tomados por node.

    - Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Fovever y por sistema operativo.

    - Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando PM2 en sus modos modo FORK y CLUSTER. Listar los procesos por PM2 y por sistema operativo.

    - Tanto en Forever como en PM2 permitir el modo escucha, para que la actualización del código del servidor se vea reflejado inmediatamente en todos los procesos.

    - Hacer pruebas de finalización de procesos fork y cluster en los casos que corresponda.

## Uso

1. Forkeá y cloná el branch desafio15.
2. En la terminal, parado en la raíz del proyecto, corré el siguiente comando para instalar todas las dependencias necesarias.

```
npm i
```

4. Recordá tener instalado de manera global la librería _pm2_.

```
npm i pm2 -g
```

5. Luego en el archivo _commands.md_, que se encuentra en _desafio15/docs_, vas a encontrar los comandos a ejecutar via terminal para correr la app.

## Rutas

- POST (**/login**) → Formulario para loguear usuario. Las sesiones son almacenadas en MongoDB Atlas.
- POST (**/logout**) → Se accede al clickear el botón _logout_, luego de 2 segundos redirige a _login_.
- GET (**/productos**) → Lista todos los productos disponibles.
- POST (**/productos**) → Agrega productos al listado.
- GET (**/productos-test**) → Muestra 5 productos generados al azar con _faker.js_.
- GET (**/chat**) → Muestra un chat desarrolado con _socket.io_, a su vez muestra los datos desnormalizados y es almacenado normalizado en un archivo JSON.
- GET (**/info**) → Muestra información relacionada a la app. A diferencia del desafio anterior, se incluyó el numero de procesadores.
- GET (**/randoms**) → Devuelve números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query). Por ejemplo: `/randoms?cant=500`. Si no se ingresa el parámetro, calcula 1.000 números.

# Autor
Giorgis Alejandro

# Reconocimientos
Equipo CoderHouse
