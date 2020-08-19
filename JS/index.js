
$(document).ready(function(){
  $('.your-class').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    mobileFirst: true
  });
});

const links = document.querySelectorAll(".nav-link.nav-light");
  
for (link of links) {
  link.addEventListener("click", scrollToElement);
}

document.querySelector("#toggleDark").addEventListener("click", toggleDarkMode);

function scrollToElement(e) {
  //e.preventDefault();
  removeOldActions();

  this.classList.add("active");

  /*let hrefArr = this.href.split("#");
  const elementToScroll = document.querySelector(`#${hrefArr[hrefArr.length - 1]}`);
  window.scrollTo({
    top: elementToScroll.offsetTop,
    behavior: 'smooth'
  });*/
}

function removeOldActions() {
  const links = document.querySelectorAll(".nav-link.nav-light");
  
  for (link of links) {
    link.classList.remove("active");
  }
}

function toggleDarkMode(e) {
  e.preventDefault();

  this.innerHTML = this.classList.contains("btn-dark") ? "Light Mode" : "Dark Mode";
  this.classList.toggle("btn-dark");
  this.classList.toggle("btn-light");

  const body = document.body;
  const desc = document.querySelector("#description");
  const weeks = document.querySelectorAll('.week');
  const medias = document.querySelectorAll('.media');


  body.classList.toggle('dark-mode');

  desc.classList.toggle('dark-mode');

  for (week of weeks) {
    week.classList.toggle('dark-mode');
  }

  for (media of medias) {
    media.classList.toggle('dark-mode');
  }
}

