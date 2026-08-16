/* =====================================================
   NovaTech — scroll-reveal animations
   Adds .revealed to [data-reveal] elements as they
   enter the viewport. Re-scan exposed as NT.reveal so
   dynamically rendered grids animate too.
   ===================================================== */
(function () {
  "use strict";

  // Only hide elements when JS is actually running —
  // without this class, [data-reveal] stays visible as a fallback.
  document.documentElement.classList.add("js");

  var observer = null;

  function revealAll() {
    var els = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      if (!observer) observer = createObserver();
      els.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      els.forEach(function (el) {
        el.classList.add("revealed");
      });
    }
  }

  function createObserver() {
    return new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
  }

  document.addEventListener("DOMContentLoaded", revealAll);

  // Expose re-scan for dynamic content (e.g. filtered product grids)
  window.NT = window.NT || {};
  window.NT.reveal = revealAll;
})();
