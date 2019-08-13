
//Esta forma se hace sin node express
/*const http=require('http');
const color=require('colors');
//Creacion de la funcion de respuesta
const handleServer=function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.end();
}
//Creacion de el servidor ejecutando como funcion la respuesta
const server=http.createServer(handleServer);
//Escuchando por el puerto 3000 
server.listen(3000,function(){
    console.log('Server on port 3000'.green)
});
*/
//Haciendolo con express
const express=require('express');
const color=require('colors');
const server=express();
server.get('/',function(req,res){
    res.send('<h1>Hola mundo con express y node</h1>');
    res.end();
});
server.listen(3000,function(){
    console.log("Server on port 3000");
});