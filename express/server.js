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



