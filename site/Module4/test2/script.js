
function run(){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if(firstLetter=='j'){
          bye(names[i]);
      }
      else{
          hi(names[i]);
      }
    }
}

function hi(str){
    console.log("Hi "+str);
}
function bye(str){
    console.log("Bye "+str)
}

run();