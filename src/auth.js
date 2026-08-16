/* =====================================================
   NovaTech — auth (login / register / guard)
   Seeded admin:  Vannazuro375@gmail.com / heng123
   ===================================================== */
(function () {
  "use strict";

  var ADMIN = { name: "Heng Admin", email: "Vannazuro375@gmail.com", password: "heng123" };

  function ensureAdmin() {
    var users = NT.users();
    var existing = NT.findUser(ADMIN.email);
    if (existing) return;
    var admin = NT.createUser(ADMIN.name, ADMIN.email, ADMIN.password, "admin");
    NT.toast("Admin account seeded — Vannazuro375@gmail.com / heng123");
  }
  ensureAdmin();

  function hookAuthForms() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var error = document.getElementById("error");
        var user = NT.findUser(email.value);
        if (!user || user.password !== password.value) {
          if (error) { error.textContent = "Invalid email or password."; error.style.display = "block"; }
          return;
        }
        NT.setSession(user.id);
        NT.toast("Welcome back, " + user.name.split(" ")[0] + "!");
        var redirect = new URLSearchParams(location.search).get("next") || (user.role === "admin" ? "admin.html" : "account.html");
        location.href = redirect;
      });
    }

    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("regName");
        var email = document.getElementById("regEmail");
        var password = document.getElementById("regPassword");
        var confirm = document.getElementById("regConfirm");
        var error = document.getElementById("regError");

        function fail(msg) { if (error) { error.textContent = msg; error.style.display = "block"; } }

        if (!name.value.trim() || !email.value.trim() || !password.value) {
          fail("Please fill in all fields.");
          return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
          fail("Please enter a valid email address.");
          return;
        }
        if (password.value.length < 6) {
          fail("Password must be at least 6 characters.");
          return;
        }
        if (password.value !== confirm.value) {
          fail("Passwords do not match.");
          return;
        }
        if (NT.findUser(email.value)) {
          fail("An account with this email already exists.");
          return;
        }

        var user = NT.createUser(name.value.trim(), email.value.trim(), password.value, "customer");
        NT.setSession(user.id);
        NT.toast("Account created. Welcome, " + user.name.split(" ")[0] + "!");
        location.href = new URLSearchParams(location.search).get("next") || "account.html";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", hookAuthForms);
})();
