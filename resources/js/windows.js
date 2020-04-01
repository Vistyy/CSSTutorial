function test(arg) {
  el = document.getElementById(`${arg}-window`);
  mainContainer = document.getElementById("main-container");
  if (el.classList.contains(`${arg}collapsed`)) {
    document.getElementById("signin-window").classList.remove("signinwindow");
    document.getElementById("signup-window").classList.remove("signupwindow");
    document.getElementById("signin-window").classList.add("signincollapsed");
    document.getElementById("signup-window").classList.add("signupcollapsed");
    el.classList.toggle(`${arg}window`);
    el.classList.toggle(`${arg}collapsed`);
    document.getElementById(`${arg}form`).reset();
    mainContainer.style.opacity = "0.7";
    document.getElementById("tutorial-list-box").style = "pointer-events: none";
  } else {
    el.classList.toggle(`${arg}window`);
    el.classList.toggle(`${arg}collapsed`);
    mainContainer.removeAttribute("style");
    document.getElementById(`${arg}form`).reset();
    document.getElementById("tutorial-list-box").removeAttribute("style");
  }
}

function submit() {
  document.getElementById("signinform").submit();
}

function delet() {
  const signin = document.getElementById("signin-window");
  const signup = document.getElementById("signup-window");
  if (
    event.target !== document.getElementById("signin-btn") &&
    event.target !== document.getElementById("signup-btn") &&
    (signin.classList.contains("signinwindow") ||
      signup.classList.contains("signupwindow"))
  ) {
    signin.classList.remove("signinwindow");
    signup.classList.remove("signupwindow");
    signin.classList.add("signincollapsed");
    signup.classList.add("signupcollapsed");
    mainContainer.style.opacity = "1";
    document.getElementById(`signinform`).reset();
    document.getElementById(`signupform`).reset();
    document.getElementById("tutorial-list-box").removeAttribute("style");
  }
}

//modal

function tutorialPopUp(arg) {
  el = document.getElementById(`slideshow-window`);
  mainContainer = document.getElementById("main-container");
  const markup = `markup${arg}`;
  if (el.classList.contains(`collapsed`)) {
    el.insertAdjacentHTML("afterbegin", eval(markup));
    el.classList.toggle(`collapsed`);
    document.getElementById("tutorial-list-box").style = "pointer-events: none";
    document.getElementById("main-nav").style = "pointer-events: none";
    mainContainer.style.opacity = "0.7";
  } else {
    el.classList.toggle(`collapsed`);
    el.innerHTML = `<a class="prev fa fa-angle-left" onclick="plusSlides(-1)"></a>
    <a class="next fa fa-angle-right" onclick="plusSlides(1)"></a>
    <i class="fa fa-times" onclick="tutorialPopUp('slideshow')" id="close-btn"></i>`;
    slideIndex = 1;
    mainContainer.removeAttribute("style");
    document.getElementById("tutorial-list-box").removeAttribute("style");
    document.getElementById("main-nav").removeAttribute("style");
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

let slideIndex = 1;
// showSlides(slideIndex);
function showSlides(n = 1) {
  let i;
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
const markupAnimations = `
<div class="slides">
      <div>
        <h3> CSS Animation</h3>
      <p>
          An animation lets an element gradually change from one style to another. 
          You can change as many CSS properties you want, as many times you want.
          To use CSS animation, you must first specify some keyframes for the animation. 
          Keyframes hold what styles the element will have at certain times. 
      </p>  
      <div class="animation">
      </div>
    </div>
</div>
<div class="slides">
      <div>
        <h3> CSS Animation</h3>
      <p>
          2 
      </p>  
      <div class="animation">
      </div>
    </div>
</div>
<div class="slides">
      <div>
        <h3> CSS Animation</h3>
      <p>
          3 
      </p>  
      <div class="animation">
      </div>
    </div>
</div>`;
const markupFlexbox = `
<div class="slides">
<div>
  <h3> CSS Flexbox</h3>
<p>
    blablabkalskgnenbfkwnbfmnsdbfwefbshbfhjsbdfjhdsbfjhsbfjhbsf 
</p>  
<div class="animation">
</div>
</div>
</div>`;
const markupMediaQueries = `
<div class="slides">
<div>
  <h3> CSS Media Queries</h3>
<p>
     klsdfnmklfdsmdslkfmsklfmslkmfls
</p>  
<div class="animation">
</div>
</div>
</div>`;
const markupTextEffects = `
<div class="slides">
<div>
  <h3> CSS Text Effects</h3>
<p>
    zostawcie łapke w du xd 
</p>  
<div class="animation">
</div>
</div>
</div>`;
