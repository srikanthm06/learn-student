document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Store email and password in localStorage (for practice)
  localStorage.setItem("loginEmail", email);
  localStorage.setItem("loginPassword", password);

  // Redirect to main page
  alert("Login successful!");
  window.location.href = "main.html";
});
