let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// showSlides(slideIndex);
function showSlides(n = 1) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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
        <img src="https://hackernoon.com/drafts/x84g2geg.png"/>
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
  
                          <b>flex-shrink: (number)</b> <br>
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
        <h2> CSS Media Queries</h2>
        <h3>Definition</h3>
      <p> The @media rule, introduced in CSS2, made it possible to define different style rules for different media types. <br>
          Media queries in CSS3 extended the CSS2 media types idea: <br>
          Instead of looking for a type of device, they look at the capability of the device. <br>
          
          <img src="https://miro.medium.com/max/654/1*F2QXUmXXjE1kG_5Bb770Hg.png"/>
      </p> 
      
      </div>
  </div>
  
  <div class="slides">
       <div class="middle"/>
          <div class="media-example"/>
              <h2>CSS Media Queries</h2>
              <h3>Example</h3>
              <p>It can be used for site for easier adaption on different devices.<br>
                 For specified width of screen it may appear differently.<br>
                 To create media query use <br><br> </p>
                  <code> @media screen and (max-width: 600px) { <br>
                         .slideshow-container { <br>
                         background-color: rgb(96, 184, 235);}} </code> <br><br>
                In this case  if this window would be smaller than 600px its background color will change to blue.
              
          </div>
             <img src="https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2016/12/media-query-css.png?resize=666%2C500&quality=100&strip=all&ssl=1"/>
             <img src="https://www.solodev.com/core/fileparse.php/131/urlt/media-queries-blog.jpg"/>
      </div>
  
  </div>`;

const markupTextEffects = `
  <div class="slides">
      <div class="middle"/>
        <h2>CSS Text Effects</h2>
          <h3>Definition</h3>
          <p>Text effects provides many options of styling the text and also an automated tools
             to display content wich will be optimized along the webpage. <br>
             But primarly and most often it is used to define look of the text. <br> <br>
             Most common are following properties: <br>
              <code>
             -text-overflow <br>
             -word-wrap <br>
             -word-break <br>
             -writing-mode
              </code>
          </p>  
        <img src="https://s25031.pcdn.co/wp-content/uploads/2015/04/css-text-effects3.jpg"/>
      </div>       
  </div>
  
  <div class="slides">
      <div class="middle">
          <h2>CSS Text Effects</h2>
          <h3>Text-overflow</h3>
          <p>Specifies how overflowed content that is not displayed should be signaled to the user. <br><br>
              The followng paragraph contains <b>text-overflow: clip:</b>
          </p>
          
              <div class="overflow1">
              <p>This is some long text that will not fit in the box</p>
              </div>
                  <br>
              <p>The followng paragraph contains <b>text-overflow: ellipsis:</b>
              <div class="overflow2">
              <p>This is some long text that will not fit in the box</p>
                  <br>
              </div>
              <p>Both boxes contain <b>div:hover {overflow:visible}</b> to see entire text.</p>
      </div>
  </div>
  
  <div class="slides">
      <div class="middle">
          <h2>CSS Text Effects</h2>
          <h3>Text wrapping</h3>
          <p>This property allows long words to be able to be broken and wrap onto the next line. If a word is too long
              to fit within an area it expands outside.</p> <br>
          <div class="wordwrapping1">
              This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword.
              The long word will break and wrap to the next line.
          </div>
              <br>
          <p>This paraghraph contains <b>word-wrap</b> property.</p>
          <div class="wordwrapping2">
              This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword.
              The long word will break and wrap to the next line.
          </div>
      </div>
  </div>
  
  <div class="slides">
      <div class="middle">
          <h2>CSS Text Effects</h2>
          <h3>Word breaking</h3>
          <p>This property allows long words to be able to be broken and wrap onto the next line.
             If it would not be used it will expand outside the box.<br><br>
              The following paragraph contains <b>word:break: keep-all;</b></p>
              <div class="overflow3">
                  <p>This paragraph contains some text. This line will-break-at-hyphens.</p>
              </div>
                  <br>
              <p>The following paragraph contains <b>word:break: break-all;</b></p>
              <div class="overflow4">
                  <p>This paragraph contains some text. The lines will break at any character.</p>
              </div>            
      </div>
  </div>
  
  <div class="slides">
      <div class="middle">
          <h2>CSS Text Effects</h2>
          <h3>Writing mode</h3>
          <p>This paragraph specifies wheter lines of the text are laid out horizontally or vertically.</p><br>
           <div class="flexmodel">
              <div class="writingmode1">
              <p>This text will be written horizontally.</p>
              </div>
              <div class="writingmode2">
              <p>This one  will be written vertically.</p>
              </div>
           </div> 
          
      </div>
  </div>

    <div class="slides">
      <div class="middle">
        <p>Adding JS could do much more and stunning things</p>
        <img src="https://freefrontend.com/assets/img/css-text-effects/3d-text-effect-mousemove.png"/>
        <img src="https://webdevtrick.com/wp-content/uploads/css-neon-text-effect.jpg"/>
        <img src="https://s25031.pcdn.co/wp-content/uploads/2017/03/Screen-Shot-2017-03-07-at-11.25.45-AM-1024x282.png"/>
      </div>
  </div>
  
  </div>`;
