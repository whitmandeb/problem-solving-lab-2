//This code directly interacts with the web page.


function sayHello() {
    let messageElement = document.getElementById ("message");
    messageElement.innerHTML = "Hello";
}

function revertGreeting (){
    let messageElement = document.getElementById ("message");
    messageElement.innerHTML = "Click the button to change this text."
}
function showName() {  
    let nameInput = document.getElementById("nameInput").value;
    alert("Hello " + nameInput);
}

