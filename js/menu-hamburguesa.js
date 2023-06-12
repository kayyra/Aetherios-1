document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    let menu = document.getElementById('menu-hamburguesa');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});