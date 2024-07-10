document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cat-scroll-container");
  console.log("Scrolling");
  container.scrollLeft = 100;
  console.log(container.scrollLeft);
});
