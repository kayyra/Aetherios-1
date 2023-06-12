document.getElementById("hamburguer-menu").addEventListener("click", function () {
    let menu = document.getElementById('hamburguer-menu');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});