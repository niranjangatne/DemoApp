const express = require('express');
const fs = require('fs');

var app = express();

app.set('viewengine','ejs');

const port = process.env.PORT || 3400;

app.use(express.static(__dirname+'/public'));

// app.use((req,res,next) => {
// res.render('maintenance.ejs');
// });

app.use((req,res,next) => {
let log = new Date().toString() + req.method + res.path + '\n';
console.log(log);
fs.appendFile('server.log',log);
next();
});

app.get('/',(req,res) => {
res.send('<h1>Hellooo Express!!</h1>');
});

app.get('/User',(req,res) => {
    // res.send(
    //     {
    //     'name': 'FIGmd',
    //     'address':'Nanded City'
    //     }
    // );

    res.render('home.ejs', {
        pagetitle: 'ExpressApp',
        username: 'Niranjan'
    })
    });


app.listen(port, () => {});

