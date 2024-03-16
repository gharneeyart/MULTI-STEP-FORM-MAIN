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
const forward1 = document.querySelector("#forward1");
const forward2 = document.querySelector("#forward2");


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

// Function to update selection
function updateSelection(clickedElement) {
    // Remove blue border from all elements
    [click1, click2, click3].forEach(element => {
        element.style.border = "";
    });
    
    // Set blue border to the clicked element
    clickedElement.style.border = "1px solid blue";

    // Store the selected plan in local storage
    localStorage.setItem("plans", clickedElement.id);
}

// Event listeners for each checkbox
click1.addEventListener("click", function() {
    updateSelection(click1);
});

click2.addEventListener("click", function() {
    updateSelection(click2);
});

click3.addEventListener("click", function() {
    updateSelection(click3);
});

// Retrieve the selected plan from local storage and apply the blue border
const selectedPlan = localStorage.getItem("plans");
if (selectedPlan) {
    const selectedElement = document.querySelector(`#${selectedPlan}`);
    if (selectedElement) {
        updateSelection(selectedElement);
    }
}

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

// Making the toggle button unchanged after leaving the page
const togglePlan = localStorage.getItem("yearly")
const toggled = JSON.parse(togglePlan)
if(toggled === true){
    toggle.checked = true;
}else{
    toggle.checked = false;
}
updatePrice();

// function to toggle monthly/yearly price
toggle.addEventListener("change", updatePrice);


// Function to check if any box is selected
function isAnyBoxSelected() {
    return click1.style.border === "1px solid blue" ||
           click2.style.border === "1px solid blue" ||
           click3.style.border === "1px solid blue";
}

// Event listener for the next button
forward1.addEventListener("click", function(event) {
    if (!isAnyBoxSelected()) {
        event.preventDefault();
        Toastify({
            text: "Please select a plan before proceeding.",
            duration: 3000, // 3 seconds
            close: true,
            gravity: "top", // Display at the top of the page
            position: "center", // Centered horizontally
            backgroundColor: "linear-gradient(to right, #4f86ed, #1e467d)",
            stopOnFocus: true ,// Stop timeout when hovered over
            // className: "toastify-custom", // Custom class for styling
            // style: {
            //     fontSize: "20px", // Increase font size
            //     padding: "10px", // Increase padding
            //     boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add box shadow
            //     border: "none", // Remove border
            //     maxWidth: "500px", /* Limit width */
            //     textAlign: "start" /* Center text */
            // }
            }).showToast();
    }
});
forward2.addEventListener("click", function(event) {
    if (!isAnyBoxSelected()) {
        event.preventDefault();
        Toastify({
            text: "Please select a plan before proceeding.",
            duration: 5000, // 3 seconds
            close: true,
            gravity: "top", // Display at the top of the page
            position: "center", // Centered horizontally
            backgroundColor: "linear-gradient(to right, #4f86ed, #1e467d)",
            stopOnFocus: true, // Stop timeout when hovered over
            // className: "toastify-custom", // Custom class for styling
            // style: {
            //     fontSize: "20px", // Increase font size
            //     padding: "20px", // Increase padding
            //     boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add box shadow
            //     border: "none", // Remove border
            //     maxWidth: "400px", /* Limit width */
            //     textAlign: "center" /* Center text */
            // }
            }).showToast();
    }
});






// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");
// const box3 = document.querySelector("#box3");



// function isFormValid() {
//     const clicks1 = click1;
//     const clicks2 = click2;
//     const clicks3 = click3;

//     return clicks1 || clicks2 || clicks3
//   }
// forward1.addEventListener('click', function(event) {
//     if(!isFormValid()){
//         event.preventDefault();
//         box1.style.border = "1px solid red";
//         box2.style.border = "1px solid red";
//         box3.style.border = "1px solid red";
//         return
//     }
// });
// forward2.addEventListener('click', function(event) {
//     if(!isFormValid()){
//         event.preventDefault();
//         box1.style.border = "1px solid red";
//         box2.style.border = "1px solid red";
//         box3.style.border = "1px solid red";
//         // return
//         return
//     }
// });

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


    