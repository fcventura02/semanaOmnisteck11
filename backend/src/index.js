const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 3333


const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
/**
 * Tipos de parâmetros:
 * 
 * query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar Recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table 
  */
app.listen(port)