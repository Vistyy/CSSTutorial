function test(){
    el = document.getElementById('login-window');
    if (el.className == "collapsed") {
        el.className = "loginwindow";
    }else{
        el.className = "collapsed";
    }
    
}