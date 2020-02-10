# IMS inventory management system

## About

This app is set up to be a lightweight inventory control program. Users can create, read, and update customer/inventory information within the database.

## Customer page

The customer page is intended for creating a new customer profile as well as viewing customers already in the database. The user input for new customers uses validation for each required form input. Each customer
has a relational database to their orders.

## Order page

This page of the app is where you can change the quantity of a product that is in the system. There is a drop down where you are able to select the product you want to change the inventory of. Then there is a field where you can enter the amount that you want to change the quantity by. When the submit button is pressed you will get a note on the page telling that the quantity has been changed.

## Products page

The product page allows to add new products, view all products and view one specific product. Entry fields are using validate.js and if the entry out of the expected range the app makes changes in css and html dynamically. All products are uploaded upon visiting the page. One product can be selected by using a drop down.

## Validate.js

We used validate.js on the front end to make sure information sent to the back end is in the appropriate format. E.g. quantity is an integer, email is proper email.

## Handlebars templating

Handlebars and its structure was used for the front end templating.

## ESlint and Prettier

We used combination of ESlint and prettier to make sure everyone's code adhere to the agreed upon standard and structure.

## jQuery

jQuery was used for DOM manipulation and front end JavaScript logic.

## Link to application website

[IMS website](https://whispering-badlands-47825.herokuapp.com/)
