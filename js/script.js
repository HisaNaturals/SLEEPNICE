const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('dark');
  e.target.innerText === ' Dark Theme'
    ? (e.target.innerHTML = `<i class="fa-solid fa-sun"></i> Light Theme`)
    : (e.target.innerHTML = `<i class="fa-solid fa-moon"></i> Dark Theme`);
});


let navBar = document.querySelector(".header .navbar");

document.querySelector('#menu').onclick = () => {
  navBar.classList.toggle("active"); 
}
 
 //Get the button:
      myButton = document.getElementById("myBtn");

      // When the user scrolls down 500px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          myButton.style.display = "block";
        } else {
          myButton.style.display = "none";
        }
      }
        // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }