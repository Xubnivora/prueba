const express = require('express'); 
const app = express(); 
const port =  5000; 
const sql = require('mssql/msnodesqlv8');
var cors = require("cors");
app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`)); 



const pool = new sql.ConnectionPool({
  database: 'PRUEBAREST',
  server: 'LAPTOP-DIJC1E1E\\SQLEXPRESS',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})



sql.on('error', err => {
  console.log(err);
})

 app.post('/express_productos', async (req, res) => { 

  let value = req.query;
  let mayos = [];

  console.log(req.query);

  await pool.connect().then((err) => {

     pool.request()
    .input('id_producto', sql.Int, Math.random())
    .input('nombre_producto', sql.VarChar(50), req.query[1])
    .input('id_tipo_producto', sql.VarChar(50), req.query[6])
    .query('insert into [PRUEBAREST].[dbo].[PRODUCTO] ([id_producto],[nombre_producto],[id_tipo_producto]) values(@id_producto, @nombre_producto, @id_tipo_producto)');




  })




}); 



app.get('/obtener_observaciones_almacen',async  function(req, response){

  let codigo_producto =  req.query.codprod;
  let codigo_depto =  req.query.coddept;

  let QUERY = "";

QUERY = ` SELECT TOP 10 SUBSTRING ([Ped_Observa] ,0 , 100)  AS OBSERVACION  FROM [COPIASE].[dbo].[ENCPEDI2]
       WHERE [Emp_Codigo] = 4 AND [Area_Codig] = '001' AND [PedDProduc] = '${codigo_producto}' AND [Cli_Codigo] = '${codigo_depto}' ORDER BY PEd_correl DESC;`;

response.set('Content-Type', 'application/javascript');
let name  = '';
let paragraph = ' ';

sql.close();

await sql.connect(constE, function (err) {

 let request = new sql.Request();

 request.query(QUERY, function (err, result) {

 if (err){response.send(paragraph+= err);}else{

   for (let i=0; i < result.recordset.length; i++) {

      paragraph  += ' \n  '+result.recordset[i].OBSERVACION+' \n \n \n';

     }
     sql.close();
    response.send(paragraph);

}

});
});
});
