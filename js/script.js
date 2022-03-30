
// Dynamic Copyright year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


// Make mobile Navigation work
const btnNavEL = document.querySelector('.btn-mobile-nav');
const headerEL = document.querySelector('.header');

btnNavEL.addEventListener('click', function() {
  // If the class is not write, when you click it will be added
  // It applies on the other way around
  headerEL.classList.toggle('nav-open')
})

// SMOOTH SCROLLING ANIMATION

// Select all the links
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll Back to top
    if(href === '#'){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // Scroll to other links
    if(href !== '#' && href.startsWith('#')){
      // Make the scroll to a view
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({behavior: 'smooth'})
    }

    // Close mobile nvagitarion
    if(link.classList.contains('main-nav-link')){
      headerEL.classList.toggle('nav-open')
    }

  })
})

// STICKY NAVIGATION

const sectionHeroEl = document.querySelector('.section-hero')
const observer = new IntersectionObserver(function (entries) {
 const ent = entries[0];
  if(ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove('sticky')
  }
  
}, 
{
   // root is where the element should be appearing or not
  // in the viewport
  root: null,
  threshold: 0,
  // To start less 80px than the new section
  rootMargin: '-80px'
});

observer.observe(sectionHeroEl)




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
