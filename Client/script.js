document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
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

  // FIX: Wrap your button styling in a standard function (removed top-level await)
  const styleButtons = () => {
    const primaryBtn = document.querySelector(".hero-actions .primary");
    const secondaryBtn = document.querySelector(".hero-actions .secondary");

    if (primaryBtn) {
      primaryBtn.style.backgroundColor = "transparent";
      primaryBtn.style.textDecoration = "underline white";
    }
    // ... apply other styles similarly using .style.property
  };

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

const primaryBtn = document.querySelector(".hero-actions .primary");
const secondaryBtn = document.querySelector(".hero-actions .secondary");

if (primaryBtn) {
  await setElementStyles(primaryBtn, {
    "background-color": "transparent",
    cursor: "pointer",
    "text-decoration": "underline white",
    color: "white",
  });
}

if (secondaryBtn) {
  await setElementStyles(secondaryBtn, {
    "background-color": "transparent",
    cursor: "pointer",
    "text-decoration": "underline white",
    color: "white",
  });
}

data = {
  success: !!(primaryBtn && secondaryBtn),
};

const buttons = document.querySelectorAll(".hero-actions .button");

for (const btn of buttons) {
  await setElementStyles(btn, {
    "text-underline-offset": "10px",
    "text-decoration-thickness": "2px",
  });
}

data = {
  count: buttons.length,
};
