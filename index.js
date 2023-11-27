const mobileMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".menu");
const socialLinks = document.querySelector(".social");
const headerH1 = document.querySelector("h1");
const headerP = document.querySelector(".header-text");
const headerServices = document.querySelector(".services");
const btnContact = document.querySelectorAll(".btnContact");
const downloadBtn = document.querySelector(".downloadBtn");


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
function reloadPage() {
    location.reload();
};
mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("mobile");
    socialLinks.classList.toggle("mobile");
});
btnContact.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "#contactForm";
  })
});
// Fonction pour animer le défilement vers une section

// Ajoutez des écouteurs d'événements aux liens du menu
document.querySelectorAll('.nav-a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    console.log(link);
    event.preventDefault(); // Empêche le comportement de lien par défaut
    var targetSectionId = link.getAttribute('href').substring(1);
    scrollToSection(targetSectionId);
  })
});
window.addEventListener("load", () => {
    headerH1.classList.add("animLtR");
    headerP.classList.add("animRtL");
    headerServices.classList.add("animBtF");

    window.addEventListener("scroll", () => {
        let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
        console.log(scrollValue);
      
        if (scrollValue >= 0.06497890320121372) {
          document.querySelector(".text-propos").classList.add("animLtR");
          document.querySelector(".image-propos").classList.add("animRtL");
        }
        if (scrollValue > 0.14800389483933787) {
          document.querySelector(".text-parallax1").classList.add("animBtF");
        }
        if (scrollValue > 0.20227199357579723) {
          document.querySelector(".service1").classList.add("animBtF");
        }
        if (scrollValue > 0.3141187886377698) {
          document.querySelector(".service2").classList.add("animBtF");
        }
        if (scrollValue > 0.4521908312794142) {
          document.querySelector(".service3").classList.add("animBtF");
        }
        if (scrollValue > 0.5929892891918208) {
          document.querySelector(".text-para2").classList.add("animBtF");
        }
        if (scrollValue > 0.6469327981732798) {
          document.querySelector(".top-img").classList.add("animLtR");
          document.querySelector(".top-text").classList.add("animRtL");
        }
        if (scrollValue > 0.7385913981357514) {
          document.querySelector(".bottom-text").classList.add("animLtR");
          document.querySelector(".bottom-img").classList.add("animRtL");
        }
        if (scrollValue > 0.8218759984329357) {
          document.querySelector(".map").classList.add("animBtF");
        }
        if (scrollValue > 0.8582278322531239) {
          document.querySelector(".map-info").classList.add("animBtF");
        }
        if (scrollValue > 0.881207400194742) {
          document.querySelector(".map-form").classList.add("animBtF");
        }
    })
});