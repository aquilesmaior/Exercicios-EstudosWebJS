/* Conectar no Banco */
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

// Select  
router.get('/clientes', (req, res) =>{
//router.get((req, res) =>{
    execSQLQuery("SELECT post_title as 'TíTulo', post_status as 'Status', post_name as 'Post', post_date as 'Data' FROM 'wp_posts'", res);
})




