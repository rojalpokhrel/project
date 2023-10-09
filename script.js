function loadNavigationAndFooter() {
  // Load the navigation HTML
  fetch('./navigation.html')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('nav').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading navigation:', error);
    });

  fetch('./footer.html')
    .then((response) => response.text())
    .then((data) => {
      //   console.log(data);
      document.querySelector('.footer').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading footer:', error);
    });
}

// Call the function to load navigation and footer on page load
document.addEventListener('DOMContentLoaded', loadNavigationAndFooter);

// --------------------------------dark theme------------------
var icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    icon.className = 'bi mi bi-moon-stars '; // Change to sun icon class when dark theme is active
  } else {
    icon.className = 'bi ni bi-brightness-high '; // Change back to moon icon class when dark theme is off
  }
};
