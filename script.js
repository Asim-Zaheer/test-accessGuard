// Intentional accessibility anti-patterns for AccessGuard testing only.
document.querySelectorAll(".card .buy").forEach(function (el) {
  el.addEventListener("click", function () {
    // empty handler noise
  });
});
