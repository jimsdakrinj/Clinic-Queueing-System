document.addEventListener("DOMContentLoaded", () => {
  const googleDiv = document.querySelector(".g_id_signin");

  if (googleDiv) {
    googleDiv.setAttribute("data-type", "standard");
    googleDiv.setAttribute("data-shape", "rectangle");
    googleDiv.setAttribute("data-size", "large");
    googleDiv.setAttribute("data-width", "100%");
  }
});
