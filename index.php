<?php
            session_start();
            ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="resources/css/style.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/queries.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="resources/js/windows.js"></script>
    <script src="resources/js/slideshow.js"></script>
    <script src="resources/js/replaceTemplate.js"></script>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400&display=swap"
      rel="stylesheet"
    />

    <title>Programming tutorial</title>
  </head>
  <body>
    <div class="main-container" id="main-container" onclick="outsidePopUp()">
      <div class="content-wrap">
        <header>
          <nav class="clearfix">
            <ul class="main-nav" id="main-nav">
              <?php
            if(isset($_SESSION['username'])){
                echo $_SESSION['username'];
                ?>
              <li class="nav-btn"><a class="navbar-username">username</a></li>
              <li class="nav-btn">
                <a class="logout-btn" href="resources/sign-out.php">Log Out</a>
              </li>
              <?php
            }else{
                ?>
              <li class="nav-btn" onclick="test('signin')">
                <a id="signin-btn">Sign In</a>
              </li>
              <li class="nav-btn" onclick="test('signup')">
                <a id="signup-btn">Sign Up</a>
              </li>
              <?php
            }
            ?>
            </ul>
          </nav>
          <?php
            if(isset($_SESSION['error'])){
              ?>
              <div class="error-container">
              <p><?php echo $_SESSION['error']  ?></p>
            </div>
            <?php
            }


          ?>
          
          <div class="title">
            <a href="/" style="text-decoration: none; color: rgb(33, 33, 33);"
              ><h1>CSS Tutorials</h1></a
            >
          </div>
        </header>
        <div class="tutorial-list-box" id="tutorial-list-box">
          <h2>Tutorial List</h2>
          <ul class="tutorial-list clearfix" id="tutorial-list">
            <li class="list-animations">
              <figure
                class="box-animations"
                onclick="tutorialPopUp('Animations', 3);showSlides()"
              >
                <a>
                  <h3>Animations</h3>
                </a>
              </figure>
              <label class="completion-container">
                <input type="checkbox" name="completion" id="completion" />
                <span class="checkmark"></span>
              </label>
              <a
                class="external"
                href="./resources/html/template.html?tutorial=animations"
                ><i class="fa fa-external-link"></i
              ></a>
            </li>
            <li class="list-flexbox">
              <figure
                class="box-flexbox"
                onclick="tutorialPopUp('Flexbox', 3);showSlides()"
              >
                <a>
                  <h3 id="normal-flex-title">Flexbox</h3>
                  <div id="flex-title">
                    <div><h3>F</h3></div>
                    <div><h3>lex</h3></div>
                    <div><h3>box</h3></div>
                  </div>
                </a>
              </figure>
              <label class="completion-container">
                <input type="checkbox" name="completion" id="completion" />
                <span class="checkmark"></span>
              </label>
              <a
                class="external"
                href="./resources/html/template.html?tutorial=flexbox"
                ><i class="fa fa-external-link"></i
              ></a>
            </li>
            <li class="list-media">
              <figure
                class="box-media-queries"
                onclick="tutorialPopUp('MediaQueries', 2);showSlides()"
              >
                <a>
                  <div class="moving-block"></div>
                  <h3>Media Queries</h3>
                </a>
              </figure>
              <label class="completion-container">
                <input type="checkbox" name="completion" id="completion" />
                <span class="checkmark"></span>
              </label>
              <a
                class="external"
                href="./resources/html/template.html?tutorial=mediaqueries"
                ><i class="fa fa-external-link"></i
              ></a>
            </li>
            <li class="list-text">
              <figure
                class="box-text-effects"
                onclick="tutorialPopUp('TextEffects', 5);showSlides()"
              >
                <a>
                  <h3>Text Effects</h3>
                </a>
              </figure>
              <label class="completion-container">
                <input type="checkbox" name="completion" id="completion" />
                <span class="checkmark"></span>
              </label>
              <a
                class="external"
                href="./resources/html/template.html?tutorial=texteffects"
                ><i class="fa fa-external-link"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <footer>stuff to type in here, copyrightedtm</footer>
    </div>
    <div class="collapsed slideshow-container" id="slideshow-container">
      <div class="slideshow-window" id="slideshow-window"></div>
      <a class="prev fa fa-angle-left" onclick="plusSlides(-1)"></a>
      <a class="next fa fa-angle-right" onclick="plusSlides(1)"></a>
      <div class="dot-container" id="dot-container"></div>
      <i class="fa fa-times" onclick="tutorialPopUp()"></i>
    </div>
    <div class="signincollapsed" id="signin-window">
      <i class="fa fa-times" onclick="test('signin')"></i>
      <h3>sign in</h3>
      <form
        action="resources/sign-in.php"
        method="post"
        id="signinform"
        class="clearfix"
      >
        <div>
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            name="username"
            id="signin-username"
            placeholder="Username"
          />
        </div>
        <div>
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            name="pass"
            id="signin-pass"
            placeholder="Password"
          />
        </div>
        <div>
          <!-- <i class="fa fa-arrow-right" aria-hidden="true" onclick="submit()" > </i> -->
          <input type="submit" value="sign in" id="signin-submit" />
        </div>
      </form>
    </div>
    <div class="signupcollapsed" id="signup-window">
      <i class="fa fa-times" onclick="test('signup')"></i>
      <h3>sign up</h3>
      <form
        action="resources/sign-up.php"
        method="post"
        id="signupform"
        class="clearfix"
      >
        <div>
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            name="username"
            id="signup-username"
            placeholder="Username"
          />
        </div>
        <div>
          <i class="fa fa-lock first-lock" aria-hidden="true"></i>
          <input
            type="password"
            name="pass"
            id="signup-pass"
            placeholder="Password"
          />
        </div>
        <div>
          <i class="fa fa-lock second-lock" aria-hidden="true"></i>
          <input
            type="password"
            name="pass2"
            id="signup-pass2"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <!-- <i class="fa fa-arrow-right" aria-hidden="true" onclick="submit()" > </i> -->
          <input
            type="submit"
            value="sign up"
            id="signup-submit"
            onclick="submit()"
          />
        </div>
      </form>
    </div>
  </body>
</html>
