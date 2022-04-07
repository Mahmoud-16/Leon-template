// Rotating the header icon and showing the links once the icon is clicked and hiding the links when clicked outside.
let headerIcon = document.getElementsByTagName("i")[0];
let headerDropDown = document.getElementsByTagName("ul")[0];

// Show links once the icon is clicked
headerIcon.addEventListener("click", function () {
  if (headerDropDown.style.display === "none") {
    headerDropDown.style.display = "block";
    headerIcon.style.transform = "rotate(-180deg)";
  } else {
    headerDropDown.style.display = "none";
    headerIcon.style.transform = "rotate(-90deg)";
  }
});

// hide links when clicked outside
document.addEventListener("click", function (e) {
  if (e.target !== headerIcon) {
    headerIcon.style.transform = "rotate(-90deg)";
    headerDropDown.style.display = "none";
  }
});

// Scroll button
// Creating the button
let btn = document.createElement("button");
btn.setAttribute("id", "btn");
let buttonText = document.createTextNode("Up");
btn.appendChild(buttonText);
btn.style.cssText =
  "color: white; border: none; cursor: pointer; background-color: #10cab7; border-radius: 4px; position: fixed; right: -50px; bottom: 20px; padding: 8px; transition-duration: 0.3s";
document.body.appendChild(btn);

// Showing the button while scrolling
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btn.style.right = "20px";
  } else {
    btn.style.right = "-50px";
  }
};
// Scroll to top on click
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scrolling to page sections
document.addEventListener("click", function (e) {
  // Checking wether a header link is clicked or not
  if (e.target.classList.contains("header-link")) {
    // Which link is clicked and scrolling its section
    if (e.target.textContent === "Services") {
      location.href = "/#services";
    }
    if (e.target.textContent === "Portfolio") {
      location.href = "/#portfolio";
    }
    if (e.target.textContent === "About") {
      location.href = "/#about";
    }
    if (e.target.textContent === "Contact") {
      location.href = "/#contact";
    }
  }
});

// Opening social media pages
document.addEventListener("click", function (e) {
  if (e.target.id === "yt") {
    window.open("https://youtube.com")
  }
  if (e.target.id === "fb") {
    window.open("https://facebook.com")
  }
  if (e.target.id === "tw") {
    window.open("https://twitter.com")
  }
})