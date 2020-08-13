var hoverText = document.getElementsByClassName("hoverText");
var imageFollow = document.getElementsByClassName("imageFollow");
console.log("hey", imageFollow);
for (i = 0; i < hoverText.length; i++) {
  var imageToFollow = imageFollow[i];
  hoverText[i].addEventListener("mousemove", (e) => {
    imageToFollow.style.display = "initial";
    imageToFollow.style.left = `${e.clientX}px`;
    imageToFollow.style.top = `${e.clientY}px`;
  });

  hoverText[i].addEventListener("mouseout", (e) => {
    imageToFollow.style.display = "none";
  })
}
