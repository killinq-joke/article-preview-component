function closeShare() {
  //document.getElementById("share-button").classList.remove("active");
}

document.body.addEventListener("click", function (e) {
  document.getElementById("share-button").classList.remove("active");
  document.getElementById("pop-up").style.display = 'none';
}, false);

document.getElementById("share-button").addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("share-button").classList.add("active");
  document.getElementById("pop-up").style.display = 'flex';
}, true);
