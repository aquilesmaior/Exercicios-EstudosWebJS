const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');


//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


//inicia o servidor
app.listen(port);
console.log('API funcionando!');



/* Conectar no Banco 
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: "mysql.dominiox.com.br",
      user: "adminx",
      password: "c6u3d4k4",
      database : 'basedominiox'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }
/*
// Select  
router.get('/clientes', (req, res) =>{
//router.get((req, res) =>{
    execSQLQuery("SELECT post_title as 'TíTulo', post_status as 'Status', post_name as 'Post', post_date as 'Data' FROM 'wp_posts'", res);
})
*/
