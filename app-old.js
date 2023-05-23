const http = require('http')

http.createServer( (req, res)=>{

    // // res.writeHead(404, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })
    
    res.write( 'Hola mundo');
    res.end();
    // res.write( '1, fernando\n');
    // res.write( '2, Joseph\n');
    // res.write( '3, Leinis\n');
    // res.write( '4, Pedro\n');
} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
