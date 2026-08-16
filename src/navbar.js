/* =====================================================
   NovaTech — shared header behaviour
   Mobile menu · auth-aware links · live cart count
   ===================================================== */
(function () {
  "use strict";

  function esc(text) {
    return NT.sanitize(text);
  }

  function renderAccountLinks() {
    document.querySelectorAll(".top").forEach(function (top) {
      var actions = top.querySelector(".actions");
      if (!actions) return;

      // Remove previously injected auth links (if re-rendered)
      actions.querySelectorAll(".nt-auth").forEach(function (el) { el.remove(); });

      var user = NT.currentUser();
      var frag = document.createDocumentFragment();

      function link(href, className, text) {
        var a = document.createElement("a");
        a.href = href;
        a.className = className || "";
        a.textContent = text;
        return a;
      }

      if (user) {
        frag.appendChild(link("account.html", "nt-auth", "Hi, " + esc(user.name.split(" ")[0])));
        if (user.role === "admin") {
          frag.appendChild(link("admin.html", "nt-auth admin-link", "Admin"));
        }
        var logout = link("#", "nt-auth", "Logout");
        logout.addEventListener("click", function (e) {
          e.preventDefault();
          NT.clearSession();
          NT.toast("Signed out. See you soon!");
          location.reload();
        });
        frag.appendChild(logout);
      } else {
        frag.appendChild(link("login.html", "nt-auth", "Sign in"));
        frag.appendChild(link("login.html?tab=register", "nt-auth", "Register"));
      }

      var bag = actions.querySelector(".bag");
      if (bag) actions.insertBefore(frag, bag);
      else actions.appendChild(frag);
    });
  }

  function updateCartCount() {
    var count = NT.cartCount();
    document.querySelectorAll(".bag .bubble").forEach(function (bubble) {
      bubble.textContent = count;
    });
  }

  function hookMobileMenu() {
    document.querySelectorAll(".menu-toggle").forEach(function (toggle) {
      var navigation = toggle.parentElement.querySelector(".nav");
      if (!navigation || navigation.__nt_hooked) return;
      navigation.__nt_hooked = true;

      toggle.addEventListener("click", function () {
        var isOpen = navigation.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      });

      navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navigation.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open navigation");
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof NT === "undefined") return;
    renderAccountLinks();
    updateCartCount();
    hookMobileMenu();

    NT.on("cart", updateCartCount);
    NT.on("auth", function () {
      renderAccountLinks();
    });
  });
})();
