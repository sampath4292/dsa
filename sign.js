function submitform() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "Vignan@123" && password === "password") {
        window.location.href = "main.html";
    } 
    else if (email === "admin@123" && password === "admin") {
        window.location.href = "main.html";
    } 
    else {
        alert("Invalid email or password. Please try again.");
    }
    
    return false;
}
function signup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    window.location.href = "main.html";
}


function navigateToLogin(){
     window.location.href = "signin.html";
   
}