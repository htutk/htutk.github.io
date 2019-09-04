var properties = {
  navigation: true,
  navigationTooltips: ['Home', 'Education', 'Skills', 'Contact'],
  scrollOverflow: true
}

if (window.innerWidth > 961) {
  properties.autoScrolling = true;
} else {
  properties.autoScrolling = false;
}
var fullpage = new fullpage("#fullpage", properties);



// properties.autoScrolling = false;