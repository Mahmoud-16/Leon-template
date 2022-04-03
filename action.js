// Rotating the header icon and showing the links once the icon is clicked and hiding the links when clicked outside.
let headerIcon = document.getElementsByTagName("i")[0];
let headerDropDown = document.getElementsByTagName("ul")[0];

document.addEventListener("click", function (e) {
  if (e.target === headerIcon) {
    headerIcon.style.transform = "rotate(-180deg)";
    headerDropDown.style.display = "block";
  } else {
    headerIcon.style.transform = "rotate(-90deg)";
    headerDropDown.style.display = "none";
  }
});
