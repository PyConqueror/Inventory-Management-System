# Inventory Management System

This project is a simple inventory management system built with React and Express. It allows users to view, add, edit, and delete product information. The system supports user authentication, with special functionalities available to users with admin privileges.

[https://inventory-management-system-pt-820e4eafa3ee.herokuapp.com/](https://inventory-management-system-pt-820e4eafa3ee.herokuapp.com/)


## Features

- User authentication and authorization.
- List all products in the inventory.
- Sort products by clicking the Table title (Name, Quantity & Supplier)
- Add new products to the inventory (Admins only).
- Edit existing product details (Admins only).
- Delete products from the inventory (Admins only).

## Getting Started

1. Visit [DEPLOYMENT SITE](https://inventory-management-system-pt-820e4eafa3ee.herokuapp.com/).
2. Log in with pre-created account :

### Admin Account
- email : wan@email
- password : 1234

### Guest Account
- email : wan2@email
- password : 1234

### OR

2. Fill in the required fields with your information.
3. Select an account type. Note: To add or edit items in the inventory, you must sign up as an "Admin".
4. Submit the form to create your account.

### Adding an Item

Once logged in as an admin, you can add items to the inventory:

1. Navigate to the "Add New Product" section.
2. Fill in the form with the item's details, including the name, description, stock quantity, and supplier.
3. Submit the form to add the item to the inventory.

### Editing an Item

To edit an existing item in the inventory:

1. From the main inventory list, click on the item you wish to edit to view its details.
2. If you're logged in as an admin, you'll see an "Edit" option.
3. Click on "Edit" to modify the item's details.
4. After making the desired changes, submit the form to update the item's information in the inventory.

## Screenhots
### Login Page
![Website Image](/static/ScreenShot%201.png)
### Inventories Page
![Website Image](/static/ScreenShot%202.png)
### Product Info Page
![Website Image](/static/ScreenShot%203.png)



## Technologies Used

### Software Used:
- Microsoft VS Code : Version 1.86.2 
- Github
- Google Chrome : Version 121.0.6167.184

### Backend Software
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Frontend Software
- React.js
- Vite
- Material UI

### Security
- JWT for Authentication
- bcrypt for password hashing

### Language Used:
- JavaScript : Version ES13 ECMAScript 2022
- CSS3 : Version W3 CSS 4.15
- HTML : Version 5

### Operating System:
- macOS : Sonoma 14.3.1

## Other
This project was developed as part of the selection process for Unit Nukleus, GovTech at the Ministry of Finance Malaysia