window.setInterval(() => {
  if (window.innerWidth < 961) {
    toggleHideSmall();
  } else {
    toggleHideLarge();
  }
}, 1000);

function toggleHideSmall() {
  var sm = document.querySelectorAll(".sm");
  sm.forEach((item) => {
    item.classList.remove("hidden");
  });
  var lg = document.querySelectorAll(".lg");
  lg.forEach((item) => {
    item.classList.add("hidden");
  });
}

function toggleHideLarge() {
  var lg = document.querySelectorAll(".lg");
  lg.forEach((item) => {
    item.classList.remove("hidden");
  });
  var sm = document.querySelectorAll(".sm");
  sm.forEach((item) => {
    item.classList.add("hidden");
  });
}