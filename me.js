function toggleAbout() {
  var aboutDiv = document.getElementById("about");
  if (aboutDiv.classList.contains('toggleOn')) {
    aboutDiv.classList.remove("toggleOn");
  } else {
    aboutDiv.classList.add("toggleOn");
  }
}
