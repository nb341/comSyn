# ComSyn

## What's this about?
ComSyn is a online computer store, with the intentions of helping the technologically impaired, spec and choose their computers.
(I just wanted to build an application with C#, and I already did the system design years ago).

## Tools Used
* Angular
* C#
* .NET
* SQL-SERVER
* Bootstrap

## Summary Analysis

ComSyn is a computer store that aims to recommend and sell laptops to gamers, students and members of the workforce to satisfy their needs. In addition to this they also recommend all purpose laptops. Instead of custom building or ordering new laptops they make these recommendations based on their inventory, if their inventory is unsuitable for the customer’s needs, the recommended laptop for purpose is displayed and listed as out of stock or special order only. ComSyn allows their customers to browse these categories based on the purpose of the laptop.

## Requirements Analysis

### Functional Requirements
* Customer registration.
* Customer login.
* Add new products.
* Display current products according to groups.
* Allow customers to add products to the shopping cart.
* Allow customers to immediately purchase products.
* Allow customers to special order products if out of stock.
* Allow customers to contact ComSyn for advice through email.
* Allow admin to add top picks of products for all the categories.
## Non-functional Requirements
* This is make believe, use your imagination.
* UI for screen sizes cater for laptops and above for the admin panel.

## Data Requirements:
1. Email and password for each user type.
2. Name of product.
3. Product manufacturer.
4. Product built date.
5. Clock rate/CPU speed.
6. CPU brand.
7. Number of CPU cores.
8. CPU name.
9. CPU generation.
10. Dedicated graphic card.
11. Product screen size.
12. Product screen refresh rate.
13. Screen type. (IPS panel etc.)
14. RAM type
16. RAM brand
17. RAM size.
18. Operating System
19. Descriptive title for searching purposes.
20. Storage size.
21. Storage type (HDD, SSD)
22. Storage support (M2, NVME, HDD)
23. Storage brand.
24. Motherboard
25. Ports (USB, HDMI, Ethernet, etc, how many?).
26. Wireless connections/capabilities (bluetooth, wifi)
27. Is the product featured/recommended?
28. How much is in stock?
29. Price 
30. Discount
31. Images
32. Customer name
33. Customer address
34. Customer contact information
35. Customer computing purpose
36. Customer preferences (specs of the laptop)


### User Stories
 #### As an admin (backend tasks):
   1. I can login using my email address and password, and be redirected to the admin panel.
   2. I can add new products to the inventory listing as well as the quantity in the inventory.
   3. I can update the quantity of a product already in inventory.
   4. I can update the quantity of a product that has previously been in inventory but is out of stock.
   5. I can select products in inventory to be ComSyn top picks for gaming, work, or school (i.e gamers, workers/business, students), miscellaneous use.
   6. I can change the top picks to something else.
   7. I can remove products from the list of products for sale without deleting them.
   8. I can update the product attributes (name, description, price etc).
   9. I can view a list of all products, along with their status (displayed, out of stock, no longer available etc).
   10. I can permanently delete a product.
 #### (Tasks: Front-end) As an admin:
1. When I go to the admin panel I can see a login screen
2. I can see a text field labeled email on this page.
3. I can see a text field labeled password on this page.
4. I can see a button labeled Login on this page.
5. If I forgot to enter my email I am prompted email required.
6. If I forgot to enter my password I am prompted password required.
7. If my email or password is invalid I am prompted invalid password or email.
8. If my login is valid I can see the admin panel.
9. I can view on the admin panel all the products in a list.
10. I can filter the products by different categories as well as specifications (processors, cores, RAM etc).
11. I can see at the top of the product lists a table header with the title “Product Listings”.
12. I can see a button above the product listings labelled “Add New Product”. 
13. When I click “Add New Product” a modal appears with a form to enter the product details.
14. I can see in the add new product form text fields with labels for name, price, brand, CPU speed, CPU brand, CPU Name, number of CPU cores, number of ports for each type of port, CPU brand, manufactured date
15. I can see wireless connectivity with checkboxes for bluetooth, NFC (near field communication), WIFI in the modal.
16. I can see in each row of the product listings a button labelled “View more”.
17. When I click on the View more button all information about the product (laptop) is displayed within the table.
18. When I click on any of the fields displayed, I can edit it, hence the displayed text turns into a text field.
19. If I edit any of the fields I can see a save button at the top of the row go from a disabled state to an active/enabled state.
20. I can see a cancel button enabled next to the save button after the field has been touched to edit. If I click it the row values in the table returns to its original state.
21. If I click save, I am prompted with “success” or “fail”.
22. I can see a delete button for each row of data in the product listings. If I click it I am prompted “This product will be deleted permanently. Are you sure you want to delete?”, I can see yes and no options to click. Yes permanently removes the product from the listing, no cancels the prompt/modal.
23. I can see for each row all data fields identified in the form fields above.
24. I can see checkboxes for each row to make an item recommended for the different categories.

#### Customer Backend Tasks:
1. I can login using my email and password, or social media accounts, google, facebook, twitter, microsoft etc.
2. I can register an account, by submitting my first name, last name, address(street, town, city, country etc), my email and a password.
3. I can register my account by using one of my social media accounts.
4. I can search for a product from the entire inventory.
5. I can special order an out stock product.
6. I can add a product to my shopping cart.
7. I can remove a product from my shopping cart.
8. I can filter products based on categories and hardware specs and the operating system.
9. I can remove items from my shopping cart.
10. I can purchase an item in my shopping cart, which moves the item to my purchased items list.
11. I can not delete my purchase history.
12. I can get my purchase history details, date of purchase, date transaction was completed, transaction status (ordered fulfill, in waiting, etc) payment method, purchase/sale id and cost.
13. I can cancel my order/purchase. In which case my card is refunded.
14. I can log out.

#### Customer UI tasks, as a registered/logged in customer I can:
1. Go to the home page and see the staff’s recommended picks for each category.
2. See a navbar with options to go to the home page, shop page, about us page, contact us page, log out and edit info.
3. See all the categories with five laptops each, with each category displayed in a separate row.
4. Hover over the product and see the buttons labelled add to cart and buy.
5. Click on add to cart and I am taken to my shopping cart with the item in it.
6. Click on buy and I am taken to the checkout page.
7. Click on the product and I am taken to the product page.
8. Click on shop in the navbar and I am taken to the product listing.
9. See on the shop page a side panel with a list of options to filter the products, by categories.
10. Further filter products according to their hardware/OS/Brand specifications.
11. On the shop page see all the products listed in a 1 row by n column grid, each product is contained in a card, with quick descriptions to identify the product.
12. Click on the product in the grid and I am taken to the product page and shown all its information.
13. From the proceed to checkout page, click checkout and I am taken to the payment gateway to enter my credit card information.



