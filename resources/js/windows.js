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
/*------Animation slide------*/
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

/*------FLEXBOX-------- */

const markupFlexbox = `
<div class="slides">
    <div class="middle">
      <h2>CSS Flexbox</h2>
    <h3>Background</h3>
    <p>
    Flexbox provides more efficient way to lay out and distribute space among items in a container.
    A flex container expands items to fill availavle free space or shrinks them to prevent overflow.
    Normal layouts are vertically-based, but using flex you can set placeholders in horizontal order.    
    Base construction of Flexbox is to divide on <b>flex container</b> and <b>flex item</b>. 
    </p>
    <div class="image"/>
    <img src="https://www.tutorialrepublic.com/lib/images/flexbox-illustration.png"/>
    </div>
    
    </div>
</div>
<div class="slides">
       <div class="middle">
            <h2>CSS Flexbox</h2>
         <div class="flex-container">
            
                <div class="flexi">
                    <h3>FLEX CONTAINER</h3> properties: <br>
                    <code>
        <br>
        <b>display: flex; </b> <br>
        <i>--Defines a flex container,
        enables context for all inherited entities--</i>
        <br><br>
        <b>flex-direction: row|
        row-reverse | column | 
        column-reverse; </b><br>
        <i>--Establishes main axis of direction flex items that are placed
        in the flex container. Sets items in horizontal rows or vertical columns.--</i><br><br>

        <br>
        <b>justify-content</b><br>
        <i>--Defines the alignment along the main axis.
        Helps distribute extra free space, exerts some 
        control over the alignment of items when they overflow 
        the line.-- <br><br>
        </i>
        <b>align-items: stretch | flex-start | flex-end | center | baseline | </b> <br>
        <i>Defines how items are laid out horizontally on the current line </i> <br><br>
        <b>align-content</b> <br>
        <i>--affects only when there is one line of flex items, has properties similar
        to justify-content--</i>


                    </code>
                </div>
         <div class="flexi">
                    <h3>FLEX ITEM</h3> properties: <br> <br>
                    <code>
                        <b>order: (integer)</b> <br>
                        <i>--By default, items are in the source order, with order property,
                        apperance order might me controled.--</i><br><br>

                        <b>flex-grow: (number);</b>
                        <i>--Defines the abilirt for flex to grow if necessary, dictates
                        what amount of available space inside container the item should take up.
                        If one of the children has value of 2, the remaining space would take up twice
                        as much space as the oders.--</i><br><br>

                        <b>flex-shirnk: (number)</b> <br>
                        <i>Defines the ability for a flex item to shrink if necessary.</i><br><br>
                        <b>flex basis</b><br>
                        <i>--defines the default size of an element before remaining space is distributed.
                        If is set to 0, the extra space around the content would not be factored in.--</i><br><br>

                        <b>flex: none | [<'flex-grow'> <'flex-shrink'>? || <'flex-basis'>] </b> <br>
                        <i>--This is shorthand of flex-grow -shrink and -basis combined. It is recomended
                        to use this formula than set ither properties individually. Also values
                        of properties in this case are set intelligently.--</i>
                            
                        
                    </code>
                </div>
    </div>
</div>
</div>
<div class="slides">
        <div class="middle">
          <h2>CSS Flexbox</h2>
            <h3>Example</h3> <br>
                <div style="display:flex"/>
                    <div class="example-code"/>
                    <pre><i>--Creating containers and items (HTML)--<i><br><br>
div class="example-container"><br>
div class="example-flex1">1/div><br>
div class="example-flex1">2/div><br>
div class="example-flex2">3/div><br>
div class="example-flex3">4/div><br><br>
<i>--CSS properties--</i>
.example-container {
background-color: rgb(96, 184, 235);
width: 300px;
height: 400px;
display:flex;
flex-wrap:wrap;
align-content:flex-start;
align-items:baseline;
justify-content:center;
text-align:center;
}
.example-flex1,
.example-flex2,
.example-flex3{
display: flex;
flex-direction: column;
background-color: #333;
text-align: center;
align-items:baseline;
margin-top: 20px;
}
.example-flex1{
width:100px;
height:250px;
color: azure;
font-size: 30px;
order:2;
flex-wrap:nowrap;
}
.example-flex2 {
width: 100px;
height: 150px;
color: azure;
font-size: 30px;
order: 4;
flex-wrap: nowrap;
}
.example-flex3 {
display: flex;
width: 50px;
height: 50px;
order: 3;
color: beige;
flex-direction: column;
margin: 10px;
}
.example-flex4{
width:300px;
height:75px;
background-color:darkslategray;
order:1;
display:flex;
flex-direction:row;
text-align:center;
color:aquamarine;
}

</pre>
                    </div>
                    <div class="example-container">
                        <div class="example-flex1">1
                        </div>
                        <div class="example-flex2">2
                        </div>
                        <div class="example-flex3">3
                        </div>
                        <div class="example-flex4">4
                        </div>
                    </div>
                </div>
        
    
        </div>
</div>`;
const markupMediaQueries = `
<div class="slides">
    <div class="middle">
      <h3> CSS Media Queries</h3>
        
    <p>
         klsdfnmklfdsmdslkfmsklfmslkmfls
    </p>  
    <div class="animation">
    </div>
    </div>
</div>
<div class="slides">
</div>
<div class="slides">
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

<div class="slides">
</div>

<div class="slides">
</div>
</div>`;
