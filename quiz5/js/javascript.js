function checkForm() {
    event.preventDefault();
    if (document.getElementById('firstName').value == "") {
        alert("Please fill out your firstname");
        return;
    } else if (document.getElementById('lastName').value == "") {
        alert("Please fill out your lastname");
        return;
    } else if (document.getElementById('email').value == "") {
        alert("Please fill out your email")
        return;
    } else if (!document.getElementById('email').value.match(/.+@.+/)) {
        alert("Please have email match email@email.com")
    } else if (document.getElementById('subject').value == "") {
        alert("Please enter a subject")
        return;
    } else if (document.getElementById('message').value == "") {
        alert("Please enter a message")
        return;
    } else if (!checkStars()) {
        alert("Please rate my website")
        return;
    } else {
        alert("Good Job");
        return;
    }
}

function checkStars() {
    for (const star of document.getElementsByName("stars")) {
        if (star.checked) {
            return true;
        }
    }
    return false;
}