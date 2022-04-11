const input=document.querySelector('#input');
const output=document.querySelector('#haveNum');
const judge=document.querySelector('#judge');
let result=Math.floor((Math.random()*100)+1);
document.querySelector('#submit').addEventListener('click',compare);
document.querySelector('#again').addEventListener('click',reset);
let count=0;
function compare(){
    count++;
    console.log(result);

    console.log("count:"+count);
        if(input.value!==result){
            output.textContent+=input.value+' ';
            if(input.value>result){
                judge.textContent='your guess is higher than answer';
            }
            else{
                judge.textContent='your guess is less than answer';

            }
        }
        if(input.value==result){
            judge.textContent='Congratulations! You win!';
            remove();
        }
    if(count===10){
        judge.textContent='GAME OVER'
        remove();
    }
}

function remove(){
    output.textContent=' ';
    result=Math.floor((Math.random()*100)+1);
    console.log(result);
    count=0;
}
function reset(){
    judge.textContent='';
    output.textContent='';
    result=Math.floor((Math.random()*100)+1);

}