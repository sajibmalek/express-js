var expess=require('express');

app= expess();
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
            img_url: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/340662650_219431087434503_855959013877486101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFwv7KZKKZqPG2Yc1HWTRqYlJB7u5sv1NiUkHu7my_U2BV7tw-Rt0ZkykS0OXYuEFY3Ec8lFJbwh_qKrT_u-W_6&_nc_ohc=9Kd-c59Krk4AX_l-VV2&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBJ1lJCyV8EX0d78IXTJ_a2OGgI0cWNVFhPdK48O86O0Q&oe=64432E7B",
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
app.listen(8000,function () {
    console.log("Server Run Successfully");
});