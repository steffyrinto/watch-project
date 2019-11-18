function startTime() {
 var today = new Date();
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 document.getElementById('txt').innerHTML =
 h + ":" + m + ":" + s;
 var t = setTimeout(startTime, 500);
}
function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
 return i;
}


$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
});


//document.getElementById('myAudio').play();


function playAudio() {
    var x = document.getElementById("myAudio");
  x.play();
   document.getElementById("plays").style.visibility="hidden";
   document.getElementById("pauses").style.visibility="visible";
}

function pauseAudio() {
    var x = document.getElementById("myAudio");
  x.pause();
   document.getElementById("pauses").style.visibility="hidden";
   document.getElementById("plays").style.visibility="visible";

}

var time = 0;
var running = 0;

function startpause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById('start').innerHTML = "pause";
        document.getElementById('startpause').style.background = "green";
        document.getElementById('startpause').style.borderColor = "green";

    } else {
        running = 0;
        document.getElementById('start').innerHTML = "resume";
        document.getElementById('startpause').style.background = "green";
        document.getElementById('startpause').style.borderColor = "green";

    }
}


function reset() {
    running = 0;
    document.getElementById('start').innerHTML = "start";
    document.getElementById("output").innerHTML = "0:00:00:00";
    document.getElementById('startpause').style.background = "green";
    document.getElementById('startpause').style.borderColor = "green";

}

function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            var min = Math.floor(time / 10 / 60);
            var sec = Math.floor(time / 10 % 60);
            var hours = Math.floor(time / 60 / 60);
            var tenth = time % 10;
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            document.getElementById("output").innerHTML = hours + ":" + min + ":" + sec + ":" + tenth + "0";
            increment();
        }, 100)
    }
}
