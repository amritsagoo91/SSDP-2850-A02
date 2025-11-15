const details = document.getElementById("details-container");
const select = document.getElementById("other");
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

select.addEventListener("change", () => {
  const value = select.value;
  if (value === "magic" || value === "other") {
    details.hidden = false;
  } else {
    details.hidden = true;
  }
});

form.addEventListener("submit", (e) => {
  const emailPattern =
    "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  if (!emailPattern.test(email.value)) {
    e.preventDefault();
    email.focus();
  }
});

form.addEventListener("submit", (e) => {
  const passPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[W_]).{12,}$";
  if (!passPattern.test(password.value)) {
    e.preventDefault();
    password.focus();
  }
});
