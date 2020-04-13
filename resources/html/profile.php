<?php
            session_start();
            if(!isset($_SESSION['username'])){
                header('Location:../../index.php');
            }
            ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      type="text/css"
      href="../../resources/css/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../../resources/css/queries.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="../../resources/js/windows.js"></script>
    <script src="../../resources/js/slideshow.js"></script>
    <script src="../../resources/js/replaceTemplate.js"></script>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400&display=swap"
      rel="stylesheet"
    />

    <title>Programming tutorial</title>
  </head>
  <body>
    <div class="main-container" id="main-container" onclick="outsidePopUp()">
      <div class="content-wrap" id="content-wrap">
        <header>
          <nav class="clearfix">
            <ul class="main-nav" id="main-nav">
            <?php
            if(isset($_SESSION['username'])){
                ?>
              <li class="nav-btn"><a class="navbar-username"  href="../html/profile.php"> 
                <?php 
                echo $_SESSION['username']
                ?>
                </a></li>
              <li class="nav-btn">
                <a class="logout-btn" href="../sign-out.php">Log Out</a>
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
          <div class="title">
            <a href="/" style="text-decoration: none; color: rgb(33, 33, 33);"
              ><h1>CSS Tutorials</h1></a
            >
          </div>
        </header>
        <div class="profile-container clearfix">
          <div class="profile">
            <div>
              <img src="./../img/placeholder.png" alt="Profile Image" />
              <h3><?php echo $_SESSION['username'];?> </h3>
            </div>
            <div class="comment-block">
                <form action="../add-note.php" method="post" id='noteform' ></form>
              <textarea
                name="comment"
                id="comment"
                cols="60"
                rows="10"
                draggable="false"
                form="noteform"
              ></textarea>
              <input type="submit" class="submit"  value="Add note" form="noteform">
            </div>
          </div>
          <div class="notes">
              <?php
              $username=$_SESSION['username'];
              $text = $_POST['comment'];
              $servername = "172.17.0.3";
              $usernamedb = "root";
              $passworddb = "dupa12";
              $conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");
              $query = "SELECT * FROM notes WHERE username='$username' ORDER BY date DESC ";
              $result=mysqli_query($conn, $query);
              if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo $row['date'];
                    echo "<br>";
                    echo $row['text'];
                    echo "<br>";
                }
            }
              ?>
          </div>
        </div>
      </div>
      <footer>stuff to type in here, copyrightedtm</footer>
    </div>
    <div class="signincollapsed" id="signin-window">
      <i class="fa fa-times" onclick="test('signin')"></i>
      <h3>sign in</h3>
      <form
        action="../sign-in.php"
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
          <input
            type="submit"
            value="sign in"
            class="submit"
            id="signin-submit"
          />
        </div>
      </form>
    </div>
    <div class="signupcollapsed" id="signup-window">
      <i class="fa fa-times" onclick="test('signup')"></i>
      <h3>sign up</h3>
      <form
        action="../sign-up.php"
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
            class="submit"
            id="signup-submit"
            onclick="submit()"
          />
        </div>
      </form>
    </div>
  </body>
</html>
