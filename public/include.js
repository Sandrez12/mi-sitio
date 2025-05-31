// include.js
window.addEventListener("DOMContentLoaded", () => {
  fetch("templates/app.html")
    .then((res) => res.text())
    .then((data) => {
      const template = document.createElement("div");
      template.innerHTML = data;
      document.body.prepend(template.querySelector("nav"));
      document.body.appendChild(template.querySelector("footer"));
    });
});
