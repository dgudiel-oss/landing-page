const express = require("express");
const mysql = require("mysql2");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
//se declara para poder enviar datos a postman
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('static'));

//parametros para la conexion
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "1234560",
    database:"login"
});

//conectar la base de datos 
db.connect((error)=>{
    if(error){
        throw error;
    }
    console.log('La conexion es exitosa');
   
});


app.use(express.static('statics'));

//ruta con el get
app.get('/',(request, response )=>{
       response.sendFile(__dirname + '/views/index.html');
});

//probar la conexion con la ruta
app.listen(4200, ()=> {
    console.log("Conexion exitosa con el servidor");

});

//RUTAS
app.post('/adduser',(request,response)=>{
  let data = request.body;
  //console.log(data)
  const consultaSQL = 'insert into registrousuario (Nombre, Apellido, Telefono, Tipo_participante, Nivel)  values ("'+ data.Nombre+'","'+ data.Apellido+'",'+ data.Telefono+',"'+ data.Tipo_participante+'","'+ data.Nivel+'")';
  db.query(consultaSQL, (error, result)=>{
    if (error){
        throw error;
    }
    response.send("Registro guardado");

   });


});
app.get('/getuser',(require,res)=>{
     const consultaSQL=   'Select * from registrousuario order by Nombre desc' ;
     db.query(consultaSQL,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).send(result)
     })
});