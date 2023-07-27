
function validateLogin() {
  var usernameInput = document.querySelector('input[name="username"]');
  var passwordInput = document.querySelector('input[name="pass"]');
  var username = usernameInput.value.trim();
  var password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username/email and password.");
    return;
  }

  // You can add your login validation logic here.
  // For example, you can make an AJAX request to a server endpoint to validate the credentials.
  // If the credentials are valid, you can redirect the user to the dashboard page.
  // If the credentials are invalid, you can show an error message.

  // For demonstration purposes, let's assume the login is successful for username "demo" and password "password123".
  if (username === "Zer0Bug" && password === "Any@Way_Yuo-F0und=!t!") {
    alert("Login successful!");
    alert("Flag1:ZeroBug{We_F0u^d@Yu0$K^0w=H0w|T0%Get[The]FL@G}")
    // You can redirect to a new page here if the login is successful.
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid username/email or password.");
  }
}
