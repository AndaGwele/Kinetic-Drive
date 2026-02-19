document.addEventListener("DOMContentLoaded", function () {
  // ===== Mobile Menu Toggle =====
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("active");
      mobileMenu.classList.toggle("active");
      menuIconOpen.style.display = isOpen ? "block" : "none";
      menuIconClose.style.display = isOpen ? "none" : "block";
      mobileToggle.setAttribute(
        "aria-label",
        isOpen ? "Open menu" : "Close menu"
      );
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        menuIconOpen.style.display = "block";
        menuIconClose.style.display = "none";
      });
    });
  }

  // ===== Property Filter =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const propertyCards = document.querySelectorAll(".property-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Update active state
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      propertyCards.forEach(function (card) {
        const type = card.getAttribute("data-type");
        if (filter === "All" || type === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
