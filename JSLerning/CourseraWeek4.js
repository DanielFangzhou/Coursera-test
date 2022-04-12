

let list=document.querySelector('.output');
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

const ul=document.querySelector('.output');                 
for(let i=0;i<greetings.length;i++){
    if(greetings[i].indexOf('Christmas')!==-1){
       let listItem=document.createElement('li');
        listItem.textContent=greetings[i];
        list.appendChild(listItem);
    }
}

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
 list=document.querySelector('.output2');
 

for(let i=0;i<cities.length;i++){
    let curr=cities[i];
    curr=curr.toUpperCase();
    curr=curr[0]+curr.slice(1).toLowerCase();
    listItem=document.createElement('li');
    listItem.textContent=curr;
    list.appendChild(listItem);
}


function makeMultiplier(multiplier){

    console.log('multiplier:',multiplier);

    return   function withX(x){
        console.log('x:'+x);
        return  multiplier*x;
    }
    
}
var doubleAll=makeMultiplier(2);
console.log(doubleAll(10));
console.log(doubleAll);