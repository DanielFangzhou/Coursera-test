


// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

   
document.addEventListener("DOMContentLoaded",
function(event){

    function sayHello(event){
     console.log(event);

        this.textContent="Said it!";
        var name=document.getElementById("name").value;
        var message="<h2>hello "+ name+" !</h2>";
    
       // document.getElementById("content").textContent=message;
        document.getElementById("content").innerHTML=message;
    
    
        // if(name==="student"){
        //     // var title=document.querySelector("#title").textContent;
    
        //     var t=document.getElementById("title").textContent;
        //     t+="& lovin it!";
        //     document.getElementById("title").textContent=t;
        // }
    } 
    document.querySelector("button")
    .addEventListener("click",sayHello);
    // document.querySelector("button").onclick=sayHello;

    document.querySelector("body").addEventListener("mousemove",
        function(event){
            if(event.altKey===true){ 
                console.log(event.clientX);
                console.log(event.clientY);
            }
           

        }
    );
}
);

