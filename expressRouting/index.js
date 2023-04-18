 var express= require('express');

 app=express();


 ///routing
 app.get('/',(req, res) => {
     res.send('Home page');
 });
 app.get('/about',(req, res) => {
     res.send('About page');
 });

 app.get('/contact',(req, res) => {
     res.send('Contact page');
 });

 app.listen(8000,function () {
     console.log('Server Run Successfully');
 })