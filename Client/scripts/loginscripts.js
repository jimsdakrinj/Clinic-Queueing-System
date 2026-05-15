document.addEventListener("DOMContentLoaded", () => {
  const googleDiv = document.querySelector(".g_id_signin");

  if (googleDiv) {
    googleDiv.setAttribute("data-type", "icon");
    googleDiv.setAttribute("data-shape", "square");
    googleDiv.setAttribute("data-size", "large");
    googleDiv.setAttribute("data-logo_alignment", "center");
  }
});
