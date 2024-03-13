const online = document.querySelector("#online")
const storage = document.querySelector("#storage")
const profile = document.querySelector("#profile")
const checked1 = document.querySelector("#flexCheckDefault1");
const checked2 = document.querySelector("#flexCheckDefault2");
const checked3 = document.querySelector("#flexCheckDefault3");
const forms = document.querySelector("#forms");
const forms1 = document.querySelector("#forms1");
const forms2 = document.querySelector("#forms2");

// Retrieve data from local storage
const data = localStorage.getItem("yearly")
const isYearly = JSON.parse(data)
console.log(isYearly);

online.innerHTML = isYearly ? "+$10/yr" : "+$1/mo"
storage.innerHTML = isYearly ? "+$20/yr" : "+$2/mo"
profile.innerHTML = isYearly ? "+$20/yr" : "+$2/mo"

function updated1(){
    const isUpdated1 = checked1.checked
    localStorage.setItem("checks1", JSON.stringify(isUpdated1));
}
const onData = JSON.parse(localStorage.getItem("checks1"));

if(onData == true){
    checked1.checked = true;
}else{
    checked1.checked = false;
}
updated1();
function updated2(){
    const isUpdated2 = checked2.checked
    localStorage.setItem("checks2", JSON.stringify(isUpdated2))
}
const onData2 = JSON.parse(localStorage.getItem("checks2"));

if(onData2 == true){
    checked2.checked = true;
}else{
    checked2.checked = false;
}
updated2();
function updated3(){
    const isUpdated3 = checked3.checked
    localStorage.setItem("checks3", JSON.stringify(isUpdated3))
}
const onData3 = JSON.parse(localStorage.getItem("checks3"));

if(onData3 == true){
    checked3.checked = true;
}else{
    checked3.checked = false;
}
updated3();

// function to toggle monthly/yearly price
checked1.addEventListener("change", updated1);
checked2.addEventListener("change", updated2);
checked3.addEventListener("change", updated3);

// checked1.addEventListener("change", function() {

    
// });

// Function to update border color based on checkbox state
function updateBorderColor(inputCheckbox, formElement) {
    if (inputCheckbox.checked) {
        formElement.style.border = "1px solid blue";
    } else {
        formElement.style.border = ""; // Reset border if not checked
    }
}

// Event listeners for each checkbox
checked1.addEventListener("change", function() {
    updateBorderColor(checked1, forms);
});

checked2.addEventListener("change", function() {
    updateBorderColor(checked2, forms1);
});

checked3.addEventListener("change", function() {
    updateBorderColor(checked3, forms2);
});






// function isFormValid() {
//     const check1 = checked1.checked;
//     const check2 = checked2.checked;
//     const check3 = checked3.checked;

//     return check1 || check2 || check3
//   }
  

// forward1.addEventListener('click', function(event) {
//     if(!isFormValid()){
//         event.preventDefault();
//         forms.style.border = "1px solid red";
//         forms1.style.border = "1px solid red";
//         forms2.style.border = "1px solid red";
//         return
//     }
    // const check1 = checked1.checked;
    // const check2 = checked2.checked;
    // const check3 = checked3.checked;

    // localStorage.setItem("one", check1);
    // localStorage.setItem("two", check2);
    // localStorage.setItem("three", check3)
//   })
// forward2.addEventListener('click', function(event) {
//     if(!isFormValid()){
//         event.preventDefault();
//         forms.style.border = "1px solid red";
//         forms1.style.border = "1px solid red";
//         forms2.style.border = "1px solid red";
//         // return
//         return
//     }

    // const check1 = checked1.checked;
    // const check2 = checked2.checked;
    // const check3 = checked3.checked;

    // localStorage.setItem("one", check1);
    // localStorage.setItem("two", check2);
    // localStorage.setItem("three", check3)
// });
    
// const data1 = localStorage.getItem("one");
// console.log(data1);
// const data2 = localStorage.getItem("two");
// console.log(data2);
// const data3 = localStorage.getItem("three");
// console.log(data3);


// if(data1){
//  checked1.checked = data1;
// }else{
//     checked1.checked = "";
// }
// if(data2){
//   checked2.checked = data2 || ""
// }
// if(data3){
//   checked3.checked = data3 || ""
// }

