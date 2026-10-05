let pizzaTypes = ["Cheese", "Pepporoni", "Meat Lovers", "Supreme", "Chicken Bacon Ranch"]

pizzaSelectObj = document.getElementById("pizzaType")

pizzaQuantityObj = document.getElementById("quantity")

customerNameObj = document.getElementById("customerName")

phoneNumberObj = document.getElementById("phoneNumber")

submitButtonObj = document.getElementById("submitButton")

customerNameErrorboxObj = document.getElementById("customerNameErrorBox")

phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/



function fillpizzaSelect() {
    pizzaTypes.forEach((type) => {
        newoption = document.createElement("option")
        newoption.value = type
        newoption.textContent = type
        pizzaSelectObj.appendChild(newoption)
    })
}

function fillQuantity() {
    for (let i = 0; i < 10; i++) {
        newoption = document.createElement("option")
        newoption.value = i
        newoption.textContent = i + 1
        pizzaQuantityObj.appendChild(newoption)
    }
}

function validateForm() {
    clearErrors()
    var customerNameValidated = false
    var phoneNumberValidated = false
    var pizzaSelectValidated = false
    var pizzaQuantityValidated = false

    //checks the customer name 
    if (customerNameObj.value.trim() === "") {
        customerNameValidated = false
        console.log("customername failed")
        customerNameObj.classList.add("alert", "alert-danger")
        customerNameObj.value = ""
        customerNameObj.placeholder = "ENTER A NAME HERE"

    }
    else if (customerNameObj.value.trim().length < 6) {
        customerNameValidated = false
        console.log("customername is to short!")
        customerNameObj.classList.add("alert", "alert-danger")
        customerNameObj.value = ""
        customerNameObj.placeholder = "ENTER A NAME HERE OVER 6 CHARACTERS"
    }
    else {
        customerNameValidated = true
        console.log("customername passed")
    }

    //checks the phone number
    if (phoneNumberPattern.test(phoneNumberObj.value)) {
        phoneNumberValidated = true
        console.log("Phone number passed")
    }
    else {
        phoneNumberValidated = false
        console.log("phone number failed")

    }

    //checks the pizza choice select dropdown
    if (pizzaSelectObj.value === "None") {
        pizzaSelectValidated = false
        console.log("PizzaSelect failed")
    }
    else {
        pizzaSelectValidated = true
        console.log("PizzaSelect passed")
    }

    if (pizzaQuantityObj.value === "Null") {
        pizzaQuantityValidated = false
        console.log("Pizza Quantity failed")
    }
    else {
        pizzaQuantityValidated = true
        console.log("Pizza Quantity passed")
    }

}




function clearErrors() {
    customerNameObj.classList = ""
    customerNameObj.placeholder = "Enter your name"

    phoneNumberObj.classList = ""

    pizzaSelectObj.classList = ""

    pizzaQuantityObj.classList = ""
}

fillpizzaSelect()
fillQuantity()


submitButtonObj.addEventListener("click", validateForm)