//This code directly interacts with the web page.


function sayHello() {
    console.log("Hello!");
}


function showName() {  
    let new_string = document.getElementById("nameInput").value;
    alert("Hello " + new_string);
}