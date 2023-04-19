var expess=require('express');
var bodyParser=require('body-parser');

app= expess();
app.use(bodyParser.json());
/// Normal Routing
app.get('/one',(req, res) => {
    res.send('response one');
});
app.get('/two',(req, res) => {
    res.send('response two');
});
app.get('/contact',(req, res) => {
    res.send('Contact');
});
app.get('/huha',(req, res) => {
    res.send('Huha');
});

//// Response Status Code
app.get("/three",function (req, res) {
res.status(401).end("unAuth");
});

/// JSON Response Status Code
app.get("/four",function (req, res) {
    let json=[
        {
            name:'sajib',
            age:23,
            city:'Rajshahi',
            gender:'male',
            img_url:"https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/332223605_498318868959250_6013102022036453163_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH2TjeKb1nFLMatjFOGEPnIKObjotWyykwo5uOi1bLKTM7XPNDrQtxpwzjzQhD6vRMvAO0S1c8mdjrfxGzES8bm&_nc_ohc=i_sg6nCmPfEAX_siXBh&_nc_ht=scontent.fdac138-2.fna&oh=00_AfCB7t18-8LEr4VLc3ynoyoJAUKPq0boI4nKsMscydbAbw&oe=6442F9E3",
        },
        {
            name:'sunjita',
            age:23,
            city:'joypurhat',
            gender:'female',

        },

        {
            name:'Farhan',
            age:21,
            city:'Rajshahi',
            gender:'male',
            img_url:"https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/332423344_1318853228896411_6787056665094070811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGwGDlDxC9RsLz8YGQrrtlukSnw7_7mzLCRKfDv_ubMsE0UxbZ75Abv3FFRYpUhduek4X9XM3T-z4BckQjdPuWs&_nc_ohc=eCFRAF7RCtQAX9xOaMF&_nc_ht=scontent.fdac138-1.fna&oh=00_AfBDVyQrK3zqq2HcTRhg_DeW6_OByc0QP_l2LorMKZRn7Q&oe=6443BC30"
        },
    ];

    res.json(json);
});
///Response Download
app.get('/dn',function (req,res) {
 res.download('./uploads/shinchan.jpg');
})

//Response Redirect

app.get('/redirect',function (req,res) {
res.redirect("http://localhost:8000/New");

})


app.get('/New',function (req,res) {
    res.send('Redirect Response');
})


// Response Header

app.get('/header',function (req,res) {
    res.append("name","sajib");
    res.append("age","23");
    res.append("city","rajshahi");
    res.status(201).end('Header Response');
})

//Response Set Cookies
app.get('/cookie',function (req,res) {
res.cookie('name','Sajib')
    res.cookie('age','23')
    res.cookie('city','Rajshahi')
    res.cookie('gender','male')
    res.end('Cookie Run success')

})
// Cookie Clear
app.get('/cookie/clear',function (req,res) {
   res.clearCookie('name')
    res.clearCookie('age')
    res.end('Cookie clear successfully')
})
//Get Request With URL Query
app.get('/url',function (req,res) {
    //query=http://localhost:8000?firstName=Sajib&lastName=Malek
    let firstName=req.query.firstName;
    let lastName=req.query.lastName;
    res.end(firstName+' '+lastName)
})

///Get Request Header

app.get('/post',function (req,res) {

    res.send('This is simple post request');
})

///Simple Post Request

app.post('/header/req',function (req,res) {
    //query=http://localhost:8000?firstName=Sajib&lastName=Malek
    let firstName=req.header('firstName');
    let lastName=req.header('lastName');
    res.end(firstName+' '+lastName)
})
///Post Request With URL Query
app.post('/post/url',function (req,res) {
    //query=http://localhost:8000?firstName=Sajib&lastName=Malek
    let firstName=req.query.firstName;
    let lastName=req.query.lastName;
    res.end(firstName+' '+lastName)
})
//Post Request With Header

app.post('/post/header',function (req,res) {
    //query=http://localhost:8000?firstName=Sajib&lastName=Malek
    let userName=req.header('username');
    let password=req.header('password');
    res.end(userName+' '+password)
})


app.listen(8000,function () {
    console.log("Server Run Successfully");
});