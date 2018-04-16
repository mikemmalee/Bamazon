var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    startApp();
});

function startApp(){
   console.log(`\n Welcome to Bamazon!\n\n Featured Deals:\n`);
   connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;
        console.table(res);
   });

}

//connection.end();