document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // ✅ Store in localStorage
    localStorage.setItem("signupName", name);
    localStorage.setItem("signupEmail", email);
    localStorage.setItem("signupPassword", password);
  
    // ✅ Confirmation + redirect
    alert("Sign up successful! Now login with your account.");
    window.location.href = "login.html";
  });
  