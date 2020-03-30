const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/*
*rota / recurso
*/
/**
 * Métodos HTTP:
 * 
 * GET: buscar informação back-end
 * POST: Criar uma informação no Back-end
 * PUT: alterar informação no Back-end
 * DELETE: apagar infromação no back-end
 */

/**
 * Tipos de parametros
 * Querry: parametros nomeados enviados nas rotas apos "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: Mysql, SQLite, PostgreSQL, Oracle, MS SQL Sever
 * NoSQL: MongoDB, CouchDB ...
 */
/**
 * Driver: SELECT * FROM users
 * Driver Bilder: Table('users').select('*').where()
 */



app.listen(3333);
