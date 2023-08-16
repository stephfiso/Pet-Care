 // JavaScript to handle dropdown functionality
const dropdownButtons = document.querySelectorAll(".dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");

        dropdownButtons.forEach((button, index) => {
            button.addEventListener("click", function() {
                dropdownContents[index].style.display = dropdownContents[index].style.display === "block" ? "none" : "block";
            });
        });

 // Close the dropdown when clicking outside of it
 window.addEventListener("click", function(event) {
    dropdownButtons.forEach((button, index) => {
        if (!button.contains(event.target) && !dropdownContents[index].contains(event.target)) {
            dropdownContents[index].style.display = "none";
        }
    });
});

 


// Button State
 const emailInput = document.getElementById("email");
 const usernameInput = document.getElementById("username");
 const passwordInput = document.getElementById("password");
 const confirmPasswordInput = document.getElementById("confirmPassword");
 const createAccountButton = document.getElementById("createAccountButton");

 // Add input event listeners to enable/disable the create account button
 emailInput.addEventListener("input", updateCreateAccountButtonState);
 usernameInput.addEventListener("input", updateCreateAccountButtonState);
 passwordInput.addEventListener("input", updateCreateAccountButtonState);
 confirmPasswordInput.addEventListener("input", updateCreateAccountButtonState);

 function updateCreateAccountButtonState() {
     const emailValue = emailInput.value.trim();
     const usernameValue = usernameInput.value.trim();
     const passwordValue = passwordInput.value.trim();
     const confirmPasswordValue = confirmPasswordInput.value.trim();

     if (emailValue !== "" && usernameValue !== "" && passwordValue !== "" && confirmPasswordValue !== "") {
         createAccountButton.removeAttribute("disabled");
         createAccountButton.classList.remove("disabled");
     } else {
         createAccountButton.setAttribute("disabled", "disabled");
         createAccountButton.classList.add("disabled");
     }
 }




