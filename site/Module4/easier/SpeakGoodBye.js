(function (Window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  } 

  Window.byeSpeaker = byeSpeaker; })(Window);