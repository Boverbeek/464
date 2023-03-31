var lightMode = true;

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

//Flag to indicate if a dropdown menu is visible
var isShowing = false;

//Reference to the current dropdown menu
var dropdownMenu = null;

//Show the drop-down menu with the given id, if it exists, and set flag
function show(id)
{
    hide(); /* First hide any previously showing dropdown menu */
    dropdownMenu = document.getElementById(id);
    if (dropdownMenu != null)
    {
        dropdownMenu.style.visibility = 'visible';
        isShowing = true;
    }
}

//Hide the currently visible dropdown menu and set flag
function hide()
{       
    if (isShowing) dropdownMenu.style.visibility = 'hidden';
    isShowing = false;
}

function changeTheme() {
    var header = document.querySelector('#headerBox');
    var middle = document.querySelector('#middleBox');
    var footer = document.querySelector('#footerBox');
  
    if (lightMode) {
      // Light mode
      document.documentElement.style.background = 'black';
      header.style.backgroundColor = 'black';
      middle.style.backgroundColor = 'darkgray';
      footer.style.backgroundColor = 'black';
      lightMode = false;
      document.getElementById("ShowButton").value= "Hide Filter";
    } else {
      // Dark mode
      document.documentElement.style.background = 'white';
      header.style.backgroundColor = "#000000";
      middle.style.backgroundColor = "#f1f1f1";
      footer.style.backgroundColor = "#000000";
      lightMode = true;
      document.getElementById("ShowButton").value= "Hide Filter";
    }
}