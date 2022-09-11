// start navbar
// start toggle minu ^__^

let toggleMinu = document.querySelector(".drop-minu");
let iconMinu   = document.querySelector(".fa-align-justify");


iconMinu.addEventListener("click", () => {
    toggleMinu.classList.toggle("active");
});    

///////////////////////////////////////////////////////////////

// add and remove class active from links ^__^

let navbar = document.querySelector(".links").querySelectorAll("a");

navbar.forEach((li) => {
  li.addEventListener("click", removeActive);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  navbar.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// add and remove class active from drop-minu ^__^

let dropMinu = document.querySelector(".drop-minu").querySelectorAll("a");

dropMinu.forEach((a) => {
    a.addEventListener("click", deleteActive);
});

function deleteActive() {
    dropMinu.forEach((a) => {
        a.classList.remove("active");
        this.classList.add("active");
    });
}
//////////////////////////////////////////////////////////////////

// on scrolling remove and add class active o__o

const sections = document.querySelectorAll("section");
// let navbar = document.querySelector(".links").querySelectorAll("a");


window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navbar.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// end navbar
//////////////////////////////////////////////////////////////////////////////

// start on scroll show the icon top @__@

let iconTop = document.querySelector(".to-top");

window.onscroll = function () {
  if (this.scrollY >= 750) {
    iconTop.style.display = "block";
  } else {
    iconTop.style.display = "none";
  }
    
}