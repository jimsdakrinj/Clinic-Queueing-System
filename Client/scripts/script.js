document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a, .site-title-link");

  // Header scroll effect
  const updateHeaderScroll = () => {
    const header = document.querySelector(".site-header");
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  updateHeaderScroll();
  window.addEventListener("scroll", updateHeaderScroll, { passive: true });

  // Refresh Logic for "Home" and "QKlinik"
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/";

      // If we are on index.html and click Home or the Title
      if (
        isHomePage &&
        (href === "index.html" || this.classList.contains("site-title-link"))
      ) {
        e.preventDefault();
        window.location.reload(); // Force refresh
      }
    });
  });
});
