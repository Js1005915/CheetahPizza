//array of pizza types
let pizzaTypes = ["Cheese", "Pepporoni", "Meat Lovers", "Supreme", "Chicken Bacon Ranch"]

//getting objects from the form
pizzaSelectObj = document.getElementById("pizzaType")

pizzaQuantityObj = document.getElementById("quantity")

customerNameObj = document.getElementById("customerName")

phoneNumberObj = document.getElementById("phoneNumber")

submitButtonObj = document.getElementById("submitButton")

//getting the errorboxes for each form obj
customerNameErrorboxObj = document.getElementById("customerNameErrorBox")
phoneNumberErrorboxObj = document.getElementById("phoneNumberErrorBox")
pizzaTypeErrorboxObj = document.getElementById("pizzaTypeErrorBox")
quantityErrorboxObj = document.getElementById("quantityErrorBox")

//grabbing the form itself
form = document.getElementById("pizzaForm")


//regex pattern so we can verify the phone number
phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/


//function the fills the dropdown of pizza options, makes it changeable by just changing the array
function fillpizzaSelect() {
    pizzaTypes.forEach((type) => {
        newoption = document.createElement("option")
        newoption.value = type
        newoption.textContent = type
        pizzaSelectObj.appendChild(newoption)
    })
}
//function to fill the amount of pizza allowed in quantity, all you have to do is change the number after i < 
function fillQuantity() {
    for (let i = 0; i < 10; i++) {
        newoption = document.createElement("option")
        newoption.value = i
        newoption.textContent = i + 1
        pizzaQuantityObj.appendChild(newoption)
    }
}

//the greatest function ever
function validateForm() {
    //prevents the form from submitting
    event.preventDefault()
    //calls my clearErrors function - see below
    clearErrors()

    //sets all of the validation to false, resets everytime form is submitted
    var customerNameValidated = false
    var phoneNumberValidated = false
    var pizzaSelectValidated = false
    var pizzaQuantityValidated = false

    //checks if the customer name is blank, adds a warning 
    if (customerNameObj.value.trim() === "") {
        customerNameValidated = false
        console.log("customername failed")
        customerNameObj.classList.add("alert", "alert-danger")
        customerNameObj.value = ""
        customerNameErrorBox.innerText = "Please enter a name!"

    }
    //checks if the customer name is under 6 characters, adds a warning 
    else if (customerNameObj.value.trim().length < 6) {
        customerNameValidated = false
        console.log("customername is to short!")
        customerNameObj.classList.add("alert", "alert-danger")
        customerNameObj.value = ""
        customerNameErrorBox.innerText = "Please enter a name over 6 characters!"
    }
    else {
        customerNameValidated = true
        console.log("customername passed")
    }

    //checks the phone number is compatible with the regex pattern we set earler
    if (phoneNumberPattern.test(phoneNumberObj.value)) {
        phoneNumberValidated = true
        console.log("Phone number passed")

    }
    else {

        //gives all of the warnings if not passing the test
        phoneNumberValidated = false
        console.log("phone number failed")
        phoneNumberObj.classList.add("alert", "alert-danger")
        phoneNumberObj.value = ""
        phoneNumberErrorBox.innerText = "Please enter a phone number! - 123-456-7890"


    }

    //checks the pizza choice select dropdown and adds a warning
    if (pizzaSelectObj.value === "None") {
        pizzaSelectValidated = false
        console.log("PizzaSelect failed")
        pizzaSelectObj.classList.add("alert", "alert-danger")
        pizzaTypeErrorBox.innerText = "Please choose a pizza!"
    }
    else {
        pizzaSelectValidated = true
        console.log("PizzaSelect passed")
    }

    //checks if the quantity is null or 0, adds warning
    if (pizzaQuantityObj.value === "Null") {
        pizzaQuantityValidated = false
        console.log("Pizza Quantity failed")
        pizzaQuantityObj.classList.add("alert", "alert-danger")
        quantityErrorBox.innerText = "Please choose a quantity of pizzas!"
    }
    else {
        pizzaQuantityValidated = true
        console.log("Pizza Quantity passed")
    }

    //if every single object in the form validated, it will then submit the form, which is why we had to give it an id in the first place
    if (customerNameValidated && phoneNumberValidated && pizzaSelectValidated && pizzaQuantityValidated) {
        form.submit()

    }

}



//sets all of the form objects classList to empty so that it gets rid of the warnings, also sets the errorboxes text to blank
function clearErrors() {
    customerNameObj.classList = ""
    customerNameErrorBox.innerText = ""


    phoneNumberObj.classList = ""
    phoneNumberErrorBox.innerText = ""


    pizzaSelectObj.classList = ""
    pizzaTypeErrorBox.innerText = ""

    pizzaQuantityObj.classList = ""
    quantityErrorBox.innerText = ""
}

//calling the functions when the file runs
fillpizzaSelect()
fillQuantity()


submitButtonObj.addEventListener("click", validateForm)