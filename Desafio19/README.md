# Desafio 19 - Dividir en capas nuestro proyecto

## Uso

1. Forkeá y cloná el branch _desafio19_.
2. En la terminal, parado en la raíz del proyecto, corré el siguiente comando para instalar todas las dependencias necesarias.

```
npm i
```

3. Recordá tener instalado de manera global la librería _pm2_.

```
npm i pm2 -g
```

4. Parado en la raíz del proyecto, corré el comando.

```
npm start
```

ó

```
npm start -p <número de puerto>
```

# Rutas

| Método | Endpoint            | Descripción                                                                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| POST   | **/login**          | Formulario de login. Las sesesiones son almacenadas en mongoAtlas                                                              |
| POST   | **/logout**         | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                           |
| GET    | **/productos**      | Me permite listar todos los productos disponibles                                                                              |
| POST   | **/productos**      | Para incorporar productos al listado                                                                                           |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                             |
| GET    | **/chat**           | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |
| GET    | **/info**           | Muestra información relativa a la app    

## Logueo

### log4js

El archivo de configuración se encuentra en _utils/logger.js_ y todos los logs generados se pueden ver por consola. Además los logs de nivel error y warning, se los puede ver en los archivos _error.log_ y _warn.log_ dentro de la carpeta _logs_.

# Autor

Giorgis Alejandro

# Reconocimientos

Equipo CoderHouse