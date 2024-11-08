function formValidate() {
    let btn = document.querySelector("#login-btn");

    btn.addEventListener("click", function () {
        let username = document.querySelector("#user").value;
        let password = document.querySelector("#pass").value;

        if (username == "admin" && password == "prat1234") {
            document.querySelector("form").action = `dashboard.html`;
        } else {
            alert("wrong password entered!!");
        }
    });
}

formValidate();