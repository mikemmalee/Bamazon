var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');


// create the connection to the mysql server
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // your username
    user: "root",

    // your password
    password: "password",
    database: "bamazon"
});


// connect to the database
connection.connect(function(err){
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    startBamazon();
});


function startBamazon(){
        
    console.log("\nWelcome to Bamazon!");
    // display the products from the sql datbase
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log("\nFeatured Deals:\n");
        console.table(res);
    
    // prompt the user for what they want to purchase
        inquirer.prompt([
            {
                type: "input",
                message: "\nIf you wish to purchase an item, please enter the corresponding item id.",
                name: "id",
                validate: function(value){
                    // check if id input is a number, is greater than zero, and is not greater than the largest id available
                    if(!isNaN(value) && parseInt(value) > 0 && parseInt(value) <= res.length){
                      return true;
                    } else{
                      return false;
                    }
                }
            },
            {
                type: "input",
                message: "\nPlease enter a quantity.",
                name: "quantity",
                filter: Number,
                validate: function(value){
                    // check if quantity input is a whole number and not negative
                    if(!isNaN(value) && Number.isInteger(parseFloat(value)) && Math.sign(value) === 1){
                      return true;
                    } else{
                      return false;
                    }
                }
            }
        ])
        .then(function(answer){ 
            
            // user inputs are formatted
            var selectedItem = (answer.id) - 1;
            var selectedQty = parseInt(answer.quantity);
            var total = parseFloat(res[selectedItem].price * selectedQty).toFixed(2);

            // check user requested quantity against quantity in stock
            if (res[selectedItem].stock_quantity < selectedQty) {
                console.log("\nInsufficient quantity! Please enter a valid amount.");
                checkout();

            } else {
                // subtract item quantity and update database
                connection.query("UPDATE products SET ? WHERE ?", [
                    {stock_quantity: (res[selectedItem].stock_quantity - selectedQty)},
                    {item_id: answer.id}], function(err, result){
                        if(err) throw err;

                        // display order details
                        console.log(`
                        \n---------------------------------------------
                        \nYou have added ${selectedQty} item(s) to your cart: 
                        \n${res[selectedItem].product_name}\n`);

                        console.log(`\nTotal: $${total}\n
                        \nYour order has been placed!
                        \n---------------------------------------------`);
                        checkout();
                });
            }
        });
    });
}


function checkout(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "\nWould you like to keep shopping?",
            name: "confirm"
        }
    ]).then(function(answer){
        if (answer.confirm){
            startBamazon();
        } else {
            console.log("\nThank you for shopping! See you again soon!\n")
            connection.end();
        }
    });
}
