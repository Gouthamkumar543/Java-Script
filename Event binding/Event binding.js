let hoverme = document.getElementById("hover");

hoverme.onmouseover = function() {
    document.body.style.backgroundColor = "lightgreen";
    hoverme.textContent = "hello world, this is an onclick function";
};