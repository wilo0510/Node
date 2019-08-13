const http=require('http');
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

