function closeShare() {
  //document.getElementById("share-button").classList.remove("active");
}

var shareActive = false;

document.body.addEventListener(
  "click",
  function (e) {
    document.getElementById("share-button").classList.remove("active");
    document.getElementById("pop-up").style.display = "none";
  },
  false
);

document.getElementById("share-button").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    const shareButton = document.getElementById("share-button");
    shareButton.classList.toggle("active");
    if (shareButton.classList.contains("active")) {
      document.getElementById("pop-up").style.display = "flex";
    } else {
      document.getElementById("pop-up").style.display = "none";
    }
  },
  true
);

function log() {
  console.log("slut");
}