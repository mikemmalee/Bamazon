# Bamazon

Bamazon is an interactive CLI storefront using Node.js and MySQL. The app takes in orders from customers, calculates the order total, and depletes stock from the store's inventory database. 

## Overview

Users can run the app on their command line using "node bamazonCustomer.js" 

The Bamazon Featured Deals will display.
If the user wishes to purchase an item, they are asked to enter the item id and a desired quantity amount. 
![alt text][bamazon-demo]

[bamazon-demo]: https://github.com/mikemmalee/Bamazon/blob/master/images/bamazon-1.png " "

Upon checkout, Bamazon will display the order summary and total. 
Placing an order will also deplete the quantity available for the corresponding item and display a new quantity count when the Featured Deals are displayed again. 

![alt text][bamazon-demo]

[bamazon-demo]: https://github.com/mikemmalee/Bamazon/blob/master/images/bamazon-2.png " "


### Prerequisites

Users will need to install the following npm modules:

```
mysql
inquirer
cTable
```

### Set-up

To use this app, please follow the instructions below:

1. Pull in the repo onto your machine.
2. Open the repo folder in your prefered IDE.
3. Inside you will find the Bamazon SQL schema - Use this to create your own local database for the Bamazon inventory.
4. Open the "bamazonCustomer.js" file and enter your credentials under mysql.createConnection
5. In your command line, initialize your package.json using "npm init"
6. Finally, install the required npm modules listed in the Prerequisites section of this README. 


## Built With

* JavaScript
* Node.js
* SQL
* MySQL


## Authors

* **Mikaela Mikova** - *Initial work* - 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* UCSD Extension Coding Bootcamp
