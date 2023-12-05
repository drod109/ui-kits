document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector("#sidebar");
  document.querySelector("#toggle").addEventListener("click", () => {
    sidebar.classList.toggle("opened");
  });
});
