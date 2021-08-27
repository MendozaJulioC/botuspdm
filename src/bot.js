require('dotenv').config()
const express= require('express');
const app= express();
const http= require('http');



//Listening
const server= http.createServer(app);
server.listen(process.env.PORT||7800, ()=>console.log('Servidor activo..'))

