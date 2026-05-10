const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInDown {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(20px); }
  }
  .continue-btn {
    width: 100%;
    padding: 0.75rem;
    background: var(--primary-color, #000);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    display: none;
  }
  .continue-btn.show {
    display: block;
    animation: fadeInUp 0.4s ease forwards;
  }
  .continue-btn.hide {
    display: block;
    animation: fadeInDown 0.4s ease forwards;
  }
  .social-login {
    transition: transform 0.4s ease, margin-top 0.4s ease;
  }
  .social-login.pushed {
    margin-top: 1rem;
  }
`;
document.head.appendChild(style);

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const socialLogin = document.querySelector(".social-login");

if (form && emailInput && socialLogin) {
  let continueBtn = document.querySelector(".continue-btn");
  if (!continueBtn) {
    continueBtn = document.createElement("button");
    continueBtn.type = "submit";
    continueBtn.className = "continue-btn";
    continueBtn.innerText = "Continue";
    form.appendChild(continueBtn);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  emailInput.addEventListener("input", (e) => {
    const isValid = validateEmail(e.target.value);
    if (isValid) {
      if (!continueBtn.classList.contains("show")) {
        continueBtn.classList.remove("hide");
        continueBtn.classList.add("show");
        socialLogin.classList.add("pushed");
      }
    } else {
      if (continueBtn.classList.contains("show")) {
        continueBtn.classList.remove("show");
        continueBtn.classList.add("hide");
        socialLogin.classList.remove("pushed");

        // Remove from DOM/display after animation
        setTimeout(() => {
          if (!continueBtn.classList.contains("show")) {
            continueBtn.classList.remove("hide");
          }
        }, 400);
      }
    }
  });
}
const data = { success: true };

// 1. Container Configuration
const container = document.querySelector(".social-login");
await setElementStyles(container, {
  display: "flex",
  width: "100%",
  gap: "0.5rem",
  "align-items": "center",
  "justify-content": "stretch",
});

// 2. Apple Button (uid=199)
const appleBtn = document.querySelector(".social-btn");
await setElementStyles(appleBtn, {
  flex: "1",
  height: "40px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "border-radius": "0.5rem",
  padding: "0",
  border: "1px solid #ddd",
  background: "white",
});

// Update Apple Icon size
const appleIcon = appleBtn.querySelector("i");
if (appleIcon) {
  await setElementStyles(appleIcon, {
    "font-size": "1.5rem",
    color: "#000",
  });
}

// 3. Google Button Container (uid=202)
const googleDiv = document.querySelector(".g_id_signin");
await setElementStyles(googleDiv, {
  flex: "1",
  height: "40px",
});

// Update Google attributes to force rectangular standard style
googleDiv.setAttribute("data-type", "standard");
googleDiv.setAttribute("data-shape", "rectangular");
googleDiv.setAttribute("data-size", "large");
googleDiv.setAttribute("data-width", "100%");

// 4. Microsoft Button (uid=204)
const msBtn = document.querySelector(".ms-login-icon");
await setElementStyles(msBtn, {
  flex: "1",
  height: "40px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "border-radius": "0.5rem",
  padding: "0",
  border: "1px solid #ddd",
  background: "white",
});

// MS Icon size
const msIcon = msBtn.querySelector("img");
if (msIcon) {
  msIcon.setAttribute("width", "24");
  msIcon.setAttribute("height", "24");
  await setElementStyles(msIcon, {
    width: "24px",
    height: "24px",
  });
}
