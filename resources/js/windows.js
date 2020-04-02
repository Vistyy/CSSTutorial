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
      <div class="middle">
        <h2> CSS Animation</h3>
        <h3> Definition</h2>
      <p>
          An animation lets an element gradually change from one style to another. 
          You can change as many CSS properties you want, as many times you want.
          To use CSS animation, you must first specify some keyframes for the animation. 
</p>
<p>
          Keyframes hold what styles the element will have at certain times.
          Each @keyframes at-rule defines what should happen at specific moments during the animation.
          For example, 0% is the beginning of the animation and 100% is the end.
          These keyframes can then be controlled either by the shorthand animation property,
          or its eight sub-properties, to give more control over how those keyframes should be manipulated.
      </p>  
     
    </div>
</div>
<div class="slides">
      <div class="middle">
        <h2> CSS Animation</h2>
        <h3>Creating an object</h3>
        <code>
<br>
        <pre>.animation {
    <i>---The element to apply to----- </i>
    width: 100px;
    height: 100px;

    <i>---Setting properties of animation---</i>

    background-color: red;
    animation-name: example;
    animation-duration: 5s;
    animation-delay: 3s;
    position: relative;
    display: inline-block;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}
        </code>
        </pre>
      </div>
      </p>  
     
    </div>
</div>
<div class="slides">
      <div class="middle">
       
        <h2>CSS Animation</h2>
        <h3>KeyFrames</h3>
<br>
        <pre>@keyframes example {
    0% {background-color: red;
        left: 0px;}

    50% {background-color: yellow;
        left: 20%;}

    100% {background-color: blue;
        left: 40%;}

        </pre>
        <div class="animation">
     
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
