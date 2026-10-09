
const tax = 0.076
const pricePerPizza = 9.49


//getting the param object
const params = new URLSearchParams(window.location.search)
//setting the values based off the param object properties
const customerName = params.get("customerName")
const phone = params.get("phoneNumber")
const pizza = params.get("pizzaType")
const quantity = params.get("quantity")

//getting all of the form needed objects inside of the page
const customerNameObj = document.getElementById("customerName")
const phoneNumberObj = document.getElementById("phoneNumber")
const pizzaTypeObj = document.getElementById("pizzaType")
const pizzaQuantityObj = document.getElementById("pizzaQuantity")


//setting the corresponding items to its value from the GET
customerNameObj.innerText = customerName
phoneNumberObj.innerText = phone
pizzaTypeObj.innerText = pizza
pizzaQuantityObj.innerText = quantity


//getting all of the other objects in the page
subtotalObj = document.getElementById("subtotal")
finalTotalObj = document.getElementById("finalTotal")

//setting the subtotal and final total
subtotal = quantity * pricePerPizza
finaltotal = (subtotal * tax) + subtotal // ex: 8 + (8 * 0.076) = 8.6

//setting the objects text
subtotalObj.innerText = "$" + subtotal.toFixed(2)
finalTotalObj.innerText = "$" + finaltotal.toFixed(2)
