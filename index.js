/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const express=require('express');
const mysql=require('mysql');
const app=express();

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306"
});

app.get('/', function(req, res) {    
    db.query("SELECT * FROM test",function(err,result,fields){
        if (err) throw err;
        
        var response={"page":"home","result":result};
        res.send(JSON.stringify(response));
    });
});

/*app.get('/users', function(req, res) { 
    var response = { "page": "users" };
    res.send(JSON.stringify(response));
});

app.get('/users/messages', function(req, res) {
    var response = { "page": "messages" }; 
    res.send(JSON.stringify(response));
}); 

app.get('/users/:id(\\d+)',function(req,res){
    var response={"page":"users", "parameters": req.params};
    res.send(JSON.stringify(response));
})

app.post('/users',function(req,res){
    var response={"page":"users","parameters":req.params};
    res.send(JSON.stringify(response));
})

app.put('/users/:id(\\d+)',function(req,res){
    var response={"page":"users","parameters":req.params};
    res.send(JSON.stringify(response));
})

app.delete('/users/:id(\\d+)',function(req,res){
    var response={"page":"users","parameters":req.params};
    res.send(JSON.stringify(response));
})
*/
app.listen(3000, function() {
    db.connect(function(err){
        if (err) throw err;
        console.log('Connection to database succesful!');
    });
    console.log('Example app listening on port 3000!');
}); 