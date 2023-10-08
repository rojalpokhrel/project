function loadNavigationAndFooter() {
  fetch('navigation.html')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('nav').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading navigation:', error);
    });

  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading footer:', error);
    });
}
document.addEventListener('DOMContentLoaded', loadNavigationAndFooter);

// -------------for scroll buttns-----------------------------------------------------------------------------------------------------

function handleScroll() {
  if (window.scrollY > 50) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none'; // Hide the button when the user is at the top of the page
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// ------------------------------------------------------------------- for the buttons----------------------------------------------------------------------------------------------------------------------

const reviewbutton = document.getElementById('reviewbtn');
const reviewform = document.getElementById('review');

reviewbutton.onclick = function () {
  reviewform.scrollIntoView({ behavior: 'smooth' });
};
// ---------------------------------------------------------------------------------------------------------------------------------------
