const continueBtn = document.querySelector(".btn-continue");
const successMsg = document.querySelector(".success-msg");
continueBtn.addEventListener ("click", function(){
    const email = document.querySelector("#input1").value
    const password = document.querySelector("#input2").value
    const confirmPassword = document.querySelector("#input3").value
    const emailError = document.querySelector("#emailError")
    const passwordError = document.querySelector("#passwordError")
    const confirmError = document.querySelector("#confirmError")
    emailError.textContent = ""
    passwordError.textContent = ""
    confirmError.textContent = ""

if (email === "") {
    emailError.textContent = "Email is required"
}
if (!email.includes("@")) {
    emailError.textContent = "Please enter a valid email"
}
if (password === "") { 
    passwordError.textContent = "Password is required" 
}
if (password.length < 6) { 
    passwordError.textContent = "Password must be at least 6 characters" 
}
if (confirmPassword === "") {
    confirmError.textContent = "Please confirm your password" 
}
if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match"
}

if (email !== "" && email.includes("@") && password.length >= 6 && password === confirmPassword) {
    document.querySelector("#successMsg").textContent = "Account created successfully!"
}
});