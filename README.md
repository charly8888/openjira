# Next.js OpenJira App

Para correr localmente se necesita la base de datos

```
docker-compose up -d
```

- El -d significa **detached**

MongoDB URL Local :

```
mongodb://localhost:27030/entries-db
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con informacion de pruebas

LLamar:
´´´
http://localhost:3001/api/seed
´´´
