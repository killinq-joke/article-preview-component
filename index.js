function closeShare() {
  document.getElementById("share-button").classList.remove("active");
}

document.getElementById("share-button").addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("share-button").classList.toggle("active");
});
