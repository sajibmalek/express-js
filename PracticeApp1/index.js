var express= require( 'express');

app=express();

app.listen(8001,function ( ) {
    console.log("Server run Successfully");
})

app.get('/',(req, res) => {

res.send('hello express js');

})