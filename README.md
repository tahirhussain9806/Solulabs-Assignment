## CONTENTS OF THIS FILE

- Introduction
- Requirements
- Implemented APIs
- Recommended modules
- Installation
- Configuration

## INTRODUCTION

The above implementation is for an assigment from the Solulabs.
Problem statement:
Preface:
Build a RESTful API that can /create/read/update/delete Product and Category data from a persistence database.
Product Model:
{
productId : xxx, // Product ID
productName : xxx, // Product Name
qtyPerUnit : xxx, // Quantity of the Product
unitPrice : xxx, // Unit Price of the Product
unitInStock : xxx, // Unit in Stock
discontinued : xxx, // Boolean (yes/no)
categoryId : xxx, // Category ID
}
Category Model:
{
categoryId : xxx, // Category ID
categoryName : xxx, // Category Name
}

Required Functionality:

1.  The API should follow typical RESTful API design patterns.
2.  The data should be saved in the DB.
    Category ID in product table should be referenced in the category table.
    Provide proper unit tests.
    Provide proper API documents.
    /create should create the product and category.
    /read should read particular record from the product table (if product has any category then category should be fetched in the response)
    /readAll should read all the records from the product table (if product has any category then category should be fetched in the response)
    /update should update one particular record of the product
    /delete should delete one particular record of the product.

## REQUIREMENTS

1.  Write clear documentation on how it's designed and how to run the code.
2.  Write good in-code comments.
    Write good commit messages.
    An online demo is always welcome.
    Provide proper readme which includes steps to setup the code in any system, API documentation (Postman documentation link is preferred).
    Candidate needs to provide the github link and the candidate has to make his repository private.

## IMPLEMENTED APIS

1.  Create an entry in database.
2.  Read/fetch given data from database.
3.  Read/fetch all the data from the database.
4.  Update a data entry in the database.
5.  Delete an entry in the database.

## RECOMMENDED MODULES

1. Install the NPM on the local machine following the [link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2.
