(function () {

  var names = ["Yaakov","John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (i=0; i < names.length; i++) {
    var yes = names[i].charAt(0);
    var firstLetter = yes.toLowerCase();
    if (firstLetter === "j") {
      console.log(window.byeSpeaker.speak(names[i]));
    } else {console.log(window.helloSpeaker.speak(names[i]))};

}

 })();
