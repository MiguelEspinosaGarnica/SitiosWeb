const http = require('http');


const server = http.createServer( (req, res) => {

 //   res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
   // res.writeHead(200, { 'Content-Type': 'application/csv'});
 //   res.write( 'id, nombre\n' );
 //   res.write( '1, Miguel\n' );
 
    res.write( 'Hola Mundo' );
    res.end();
} )
.listen(30001);

console.log('Escuchando en el puerto 30001'); 