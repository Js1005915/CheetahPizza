let pizzaTypes = ["Cheese", "Pepporoni", "Meat Lovers", "Supreme", "Chicken Bacon Ranch"]

pizzaSelectObj = document.getElementById("pizzaType")

pizzaQuantityObj = document.getElementById("quantity")

customerNameObj = document.getElementById("customerName")

phoneNumberObj = document.getElementById("phoneNumber")

phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/



function fillpizzaSelect() {
    pizzaTypes.forEach( (type) => {
        newoption = document.createElement("option")
        newoption.value = type
        newoption.textContent = type
        pizzaSelectObj.appendChild(newoption)
    })  
}

function fillQuantity(){
    for (let i = 0; i < 10; i++) {
        newoption = document.createElement("option")
        newoption.value = i
        newoption.textContent = i+1
        pizzaQuantityObj.appendChild(newoption)
    }
}

function validateForm(){
    var customerNameValidated = false
    var phoneNumberValidated = false

    if (customerNameObj.value.trim() === ""){
        customerNameValidated = false
        console.log("customername failed")
    }
    else {
        customerNameValidated = true
        console.log("customername passed")
    }

    if (phoneNumberPattern.test(phoneNumberObj.value)) {
        phoneNumberValidated = true
        console.log("Phone number passed")
    }
    else {
        phoneNumberValidated = false
        console.log("phone number failed")
        console.log(phoneNumberObj.value)
    }


}

fillpizzaSelect()
fillQuantity()