
function greetUser() {
    let name = document.getElementById("name").value.trim();

    if (name === "") {
        document.getElementById("message").innerText =
            "Please enter your name!";
    } else {
        document.getElementById("message").innerText =
            "Hello " + name + "! Welcome to my website!";
    }
}
