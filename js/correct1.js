const err = document.querySelector(".error")
// console.log(err.innerHTML);
const nameInput = document.getElementById("nameInput")
const email = document.querySelector("#emailInput")
const tel = document.querySelector("#telInput")
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const telError = document.querySelector("#telError")
const nextBtn = document.querySelector("#nextBtn")
const  nextBtn2 = document.querySelector("#nextBtn2")


console.log(nameInput.value);
console.log(email);
console.log(tel);

// nameInput, nameError
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "1px solid red";
})
nameInput.addEventListener("input", function(){
    const inputValue = nameInput.value.trim();
    if(inputValue.length >= 3){
        nameInput.style.border = "1px solid blue";
        nameError.innerHTML = ""
    }else if(inputValue.length === 0) {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
    }else{
        nameInput.style.border = "1px solid red";
    } 
});
nameInput.addEventListener("blur", function(){
    nameInput.style.border = "";
    nameError.innerHTML = "";
})
// emailInput, emailError
email.addEventListener("focus", function(){
    email.style.border = "1px solid red";
})

email.addEventListener("blur", function () {
    email.style.border = ""; 
    emailError.innerHTML = "";

  });

email.addEventListener("input", function(){
    const emailValue = email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 6 && emailRegex.test(emailValue)) {
        email.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 5){
        email.style.border = "1px solid red";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        email.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});
// tel telinput
tel.addEventListener("focus", function () {
    if (tel.value.trim().length !== 11 || isNaN(tel.value.trim())) {
      tel.style.border = "1px solid red";
    }
  });

  tel.addEventListener("blur", function () {
    tel.style.border = "";
    telError.innerHTML = "";

  });

  tel.addEventListener("input", function () {
    const phoneValue = tel.value.trim();

    if (phoneValue.length === 11 && !isNaN(phoneValue)) {
      tel.style.border = "1px solid blue";
      telError.innerHTML = "";
    } else if (!isNaN(phoneValue) && phoneValue.length < 11 || phoneValue.length > 11) {
      tel.style.border = "1px solid red";
      telError.textContent = "Enter a valid phone number";
    } else {
        tel.style.border = "1px solid red";
      telError.textContent = "Invalid input";
    }
  });

  // nextBtn
  // create a function to check the overall form validation status
  function isFormValid() {
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = tel.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check each input validation rule
    const isNameValid = nameValue.length >= 3;
    const isEmailValid = emailValue.length >= 5  && emailRegex.test(emailValue);
    const isPhoneValid = phoneValue.length === 11 && !isNaN(phoneValue);

    return isNameValid && isEmailValid && isPhoneValid
  }

  // add click event to the nextBtn
  nextBtn.addEventListener('click', function(event) {
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
        email.style.border = "1px solid red";
        emailError.innerHTML = "This field is required"
        tel.style.border = "1px solid red";
        telError.innerHTML = "This field is required"
        return
    }
    // set local storage
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = tel.value.trim();
    // localStorage.setItem("name", nameValue);
    // localStorage.setItem("email", emailValue);
    // localStorage.setItem("phone", phoneValue);
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue
    }

    
  })
  nextBtn2.addEventListener('click', function(event) {
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required";
        email.style.border = "1px solid red";
        emailError.innerHTML = "This field is required";
        tel.style.border = "1px solid red";
        telError.innerHTML = "This field is required";
        return
    }
    // set local storage
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = tel.value.trim();
    // localStorage.setItem("name", nameValue);
    // localStorage.setItem("email", emailValue);
    // localStorage.setItem("phone", phoneValue);
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue
    }
    localStorage.setItem("formData", JSON.stringify(formData));

  })
  const data = localStorage.getItem("formData")

console.log(data);
const parsedData = JSON.parse(data)
console.log(parsedData);

if(parsedData){
  nameInput.value = parsedData.name || ""
  email.value = parsedData.email || ""
  tel.value = parsedData.phone || ""
}
// OR
// Destructuring
// const { name, email, phone} = parsedData
// if(parsedData){
//   nameInput.value = name || ""
//   email.value = email || ""
//   tel.value = phone || ""
// }

// removing items from the local storage
// setTimeout(localStorage.removeItem("formData"),15000)
setTimeout(() => {
  localStorage.removeItem("formData");
}, 5000)


// localStorage - You can store information temporarily and get it whenever you need it. 
// You can set items, get items and remove items
// Saving item to localStorage - setItem
// localStorage.setItem("key", value) All the information is coming from the backend. The value is set by YOU
// retrieving item from localStorage - getItem
// removing item from localStorage - removeItem




//   let nextStep = false;
//   nextBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     if (inputValue === "" || emailValue === "" || phoneValue === "") {
//         alert("Please fill in all required fields")
//         nextStep = false;
//     }else{
//         form.submit
//     }
//   });
//   form.addEventListener("submit", function(event){
//     if (!nextStep) {
//         event.preventDefault();
//     }
//   });
// const submitButton = document.querySelector("#nextBtn")
// submitButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     const inputValue = nameError.value.trim();
//     const inputVal = emailError.value.trim();
//     const inpValue = nameError.value.trim();

//     if (inputValue ==="" || inputValue === "" || inpValue === "") {}
// })