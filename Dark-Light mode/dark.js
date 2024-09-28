let icon = document.getElementById("icon");

icon.addEventListener("click", function() {
    console.log("Icon clicked!"); // Debugging to see if event is triggered
    document.querySelector("body").classList.toggle("active");

    if (document.querySelector("body").classList.contains("active")) {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
});
