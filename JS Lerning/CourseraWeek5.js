 
 
document.addEventListener("DOMContentLoaded",
 function(event){
    console.log('event: '+event);

    const input=document.querySelector('#input');
    const output= document.querySelector('#content');
   
    function sayIt(event){

        output.innerHTML="<h2> Hi "+ input.value+" !</h2>";
        if(input.value.indexOf('student')!=-1){
            document.querySelector('h1').textContent='Lecture 53 student';
        }
    }
   document.querySelector('#butt').addEventListener('click',sayIt);
   document.querySelector('#butt').addEventListener('mousemove',
    function(event){
        if(event.shiftKey){
            console.log('x:'+event.clientX+' y:'+event.clientY);
            console.log();
        }
    }
   );



    document.querySelector('#butt2').addEventListener('click',formRows);
    document.querySelector('#butt3').addEventListener('click',removeForm);










 //form rows
 console.log(document.querySelector('h1'));
 console.log(document instanceof HTMLDocument);



 const numRow=document.querySelector('#input2');
 const output2=document.querySelector('ul');

 function formRows(){
    if(numRow.value<=10){
        for(let i=0;i<numRow.value;i++){
            let curr='<li> '+(i+1)+' </li>';
        output2.innerHTML+=curr;
        }
    }
    
    else{
        // output.innerHTML="rows must less than 10";
        alert("rows must less than 10");
        console.log(numRow.value);
    }
 }

 function removeForm(){
    output2.textContent=null;
 }
 }

);

 
// document.querySelector('#butt').onclick=sayIt;
