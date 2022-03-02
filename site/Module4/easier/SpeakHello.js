(function (Window) {
  var speakWord = "Hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  } 

  Window.helloSpeaker = helloSpeaker; })(Window);