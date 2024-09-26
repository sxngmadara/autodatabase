// See https://www.npmjs.com/package/sweetalert2 documentation.
import * as sweetalert2 from "https://esm.run/sweetalert2"

console.log(sweetalert2)
const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        _mode: "no-cors",
    }).then(response => {
        alert("success!");
    }).catch(error => {
        alert("Failed to submit transaction!");
        console.error("Error:", error);
    });
});