console.log(sweetalert2)
const form = document.getElementById("http://127.0.0.1:5500/index.html");

form.addEventListener("submit", function stop(e) {
    e.preventDefault();
    e.stopPropagation();
    return e
});