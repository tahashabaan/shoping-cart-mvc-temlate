# shoping-cart-mvc-temlate
  Creating a shopping cart MVC (Model-View-Controller) template involves structuring your application in a way that separates concerns related to data, user interface, and application logic

 # Model (M)
 ### 1-Product:
   - Represents individual products with attributes such as name, price, description, and possibly other details.
   - include methods for retrieving product information from a database.

### 2-Cart:
  - Represents the user's shopping cart.
  - Contains methods for adding items, removing items, and calculating the total cost.
  - interact with a database to store and retrieve cart information.

## View (V):
### 1- ProductListView:
- Displays a list of products available for purchase.
- Provides options for users to add products to their shopping cart.
- Renders dynamically based on the data provided by the controller.
### 2- CartView:
 - Displays the contents of the shopping cart, including item details and the total cost.
 - Allows users to modify the cart, such as updating quantities or removing items.
 - Updates dynamically based on changes in the cart data managed by the controller.

## Controller (C):
### 1-ProductController:
 - Handles requests related to products (e.g., fetching the product list).
 - Interacts with the model to retrieve product data.
 - Passes data to the product view for rendering.
 - 
### 2-CartController:
- Manages actions related to the shopping cart (e.g., adding, removing items).
- Interacts with the model to update the cart data.
- Passes data to the cart view for rendering.
  
## Routes:
 - Define routes that map URLs to specific controller actions.
- For example:
1-/products: Trigger the product controller to fetch and render the product list.
2- /cart: Trigger the cart controller to fetch and render the shopping cart.
## Templates:
 - Use templates to generate HTML dynamically based on the data provided by the controller.
 - Templates are used by views to render the user interface.
## Static Files:
 - Include static files (CSS, JavaScript) for styling and client-side functionality.
 - Enhances the user interface and provides a better user experience.
## User Authentication :
  - include a user controller and implement user authentication and authorization.
  - Allows users to log in, view their order history, and maintain personalized shopping carts.
  - verfiy user authorisation or not

## How to Install and Run the Project
