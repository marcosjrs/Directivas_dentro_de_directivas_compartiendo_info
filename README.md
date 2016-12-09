Ejemplo rápido de como usar directivas dentro de directivas y como pasar datos entre ellas.


Para crear la API de peliculas que se utiliza:

- Instalamos json-server:

```
npm install -g json-server
```

- Y luego Arrancamos el servidor, cargando el json:

```
json-server --watch peliculas.json
```


- Si todo va bien ya podemos acceder al API:  

```
Resources
  http://localhost:3000/peliculas
  http://localhost:3000/clasificaciones

Home
  http://localhost:3000
```

- Las operaciones que se podrán realizar sobre esta API son las típicas y se opera básicamente mediante los verbos del HTTP




