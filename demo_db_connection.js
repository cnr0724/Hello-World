/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    port:"3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});