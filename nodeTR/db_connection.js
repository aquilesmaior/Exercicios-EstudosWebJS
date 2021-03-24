
  
  function extracaoDados() {
      
    const fs = require('fs') // file script    
    const mysql = require('mysql');
    const { result } = require('lodash');
    
    const con = mysql.createConnection({
      host: "mysql.dominiox.com.br",
      user: "adminx",
      password: "c6u3d4k4",
      database : 'basedominiox'
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT post_title as 'TíTulo', post_status as 'Status', post_name as 'Post', post_date as 'Data' FROM wp_posts", function (err, result, fields) {
        if (err) throw err;
         var dados = fields;
        
        // Usando o dateformat 
        // precisa de instalar o dateformat ok "npm install dateformat"
        var dateFormat = require('dateformat');
        var day=dateFormat(new Date(), "dd/mm/yyyy H:MM:ss");
            
        // transformar o objeto em texto e atualizar arquivo
        fs.writeFile(__dirname + '/dadosExtraidos.json', JSON.stringify(dados), err => { 
            console.log(err || 'Última Atualização - ', day)
            })
        });
      });
    
    
  setTimeout(extracaoDados, 5000);
  }
  
  extracaoDados();
  













//  con("SELECT post_title as 'TíTulo', post_status as 'Status', post_name as 'Post', post_date as 'Data' FROM 'wp_posts'", res);

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