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

