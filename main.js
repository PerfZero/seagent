const popupTrigger = document.getElementById("popup-trigger");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

popupTrigger.addEventListener("click", function () {
  popup.classList.add("show");
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("show");
});

