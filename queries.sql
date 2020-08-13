-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT product.ProductName, category.CategoryName
FROM Product 
JOIN Category on product.CategoryId = category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT shipper.CompanyName, order.Id
FROM order
INNER JOIN shipper ON shipper.Id = order.shipvia;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT order.name, order.quantity, product.productname
FROM order
INNER JOIN orderdetail on order.id = orderdetail.id
JOIN product on product.id = orderdetail.productid
WHERE order.id = 10251
ORDER BY ProductName


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT order.id, customer.companyname, employee.LastName
FROM order
INNER JOIN customer on customer.id = order.customerid
INNER JOIN employee on employee.id = order.employeeid