const arcade = document.querySelector("#arcade");
const advanced = document.querySelector("#advanced");
const pro = document.querySelector("#pro");
const arcPrice = document.querySelector("#arcadePrice");
const advPrice = document.querySelector("#advancedPrice");
const proPrice = document.querySelector("#proPrice");
const click1 = document.querySelector("#arcadeLink");
const click2 = document.querySelector("#advancedLink");
const click3 = document.querySelector("#proLink");
const toggle = document.querySelector("#flexSwitchCheckChecked");
const goBack = document.querySelector("#goBack");
const goBack2 = document.querySelector("#goBack2");

console.log(toggle);

click1.addEventListener("click", function() {
   localStorage.setItem("plan","arcade");

});
click2.addEventListener("click", function() {
    localStorage.setItem("plan", "advanced");

});
click3.addEventListener("click", function() {
    localStorage.setItem("plan", "pro");

});
// function to update price
function updatePrice(){
    const isYearly = toggle.checked
    console.log(isYearly);

    // store isYearly in localStorage
    localStorage.setItem("yearly", isYearly)

    // update prices for each plan
    arcPrice.innerHTML = isYearly ? "$90/yr" : "$9/mo";
    advPrice.innerHTML = isYearly ? "$120/yr" : "$12/mo";
    proPrice.innerHTML = isYearly ? "$150/yr" : "$15/mo";
    // update plan message
    arcade.innerHTML = isYearly ? "2 months free" : "";
    advanced.innerHTML = isYearly ? "2 months free" : "";
    pro.innerHTML = isYearly ? "2 months free" : "";
}
updatePrice();

// function to toggle monthly/yearly price
toggle.addEventListener("change", updatePrice);


// goBack.addEventListener('click', function(event) {
//     const isYearly = toggle.checked
//     isYearly = !toggle.checked

//     localStorage.setItem("isYearly",isYearly);
// });
// update = localStorage.getItem("isYearly");




// goBack.addEventListener("click", function(){
//     // retreive the local storage data
//     const data = localStorage.getItem("formData");
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
//     if (parsedData) {
//         // If data is found in local storage, redirect to the previous page with the retrieved data
//         window.location.href = "./index.html?parsedData=" + encodeURIComponent(parsedData);
//     } else {
//         // If no data is found in local storage, simply redirect to the previous page
//         window.location.href = "./index.html";
//     }
// })


    