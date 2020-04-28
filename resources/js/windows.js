tutorialContainer = document.getElementById("tutorial-list-box");
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
    if (tutorialContainer) tutorialContainer.style = "pointer-events: none";
  } else {
    el.classList.toggle(`${arg}window`);
    el.classList.toggle(`${arg}collapsed`);
    mainContainer.removeAttribute("style");
    document.getElementById(`${arg}form`).reset();
    if (tutorialContainer)
      document.getElementById("tutorial-list-box").removeAttribute("style");
  }
}

function submit() {
  document.getElementById("signinform").submit();
}

function outsidePopUp() {
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
    mainContainer.removeAttribute("style");
    document.getElementById(`signinform`).reset();
    document.getElementById(`signupform`).reset();
    if (tutorialContainer) tutorialContainer.removeAttribute("style");
  }
}

//modal

function tutorialPopUp(arg, numOfSlides) {
  const container = document.getElementById(`slideshow-container`);
  const window = document.getElementById(`slideshow-window`);
  const dots = document.getElementById(`dot-container`);
  mainContainer = document.getElementById("main-container");
  const markup = `markup${arg}`;
  if (container.classList.contains(`collapsed`)) {
    container.classList.toggle(`collapsed`);
    window.insertAdjacentHTML("afterbegin", eval(markup));
    document.getElementById("tutorial-list-box").style = "pointer-events: none";
    document.getElementById("main-nav").style = "pointer-events: none";
    mainContainer.style.opacity = "0.7";
    for (i = 1; i <= numOfSlides; i++) {
      dots.insertAdjacentHTML(
        "beforeend",
        `<span class="dot" onclick="currentSlide(${i})"></span>`
      );
    }
  } else {
    container.classList.toggle(`collapsed`);
    // container.innerHTML = `<a class="prev fa fa-angle-left" onclick="plusSlides(-1)"></a>
    // <a class="next fa fa-angle-right" onclick="plusSlides(1)"></a>
    // <i class="fa fa-times" onclick="tutorialPopUp('slideshow')" id="close-btn"></i>`;
    window.innerHTML = ``;
    slideIndex = 1;
    dots.innerHTML = ``;
    mainContainer.removeAttribute("style");
    document.getElementById("tutorial-list-box").removeAttribute("style");
    document.getElementById("main-nav").removeAttribute("style");
  }
}
