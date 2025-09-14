const option = document.querySelector('button');
const btn= document.addEventListener();
var a="";

const right = document.querySelector('.right');
const wrong=document.querySelector('.wrong');
right.addEventListener('click',()=>{
    a=true;
}
)

wrong.addEventListener('click',()=>{
    a=false;
})

option.addEventListener('click',()=>{
    if (a=true){
        option.style.backgroundColor='green';
    }
    else{
        option.style.backgroundColor='red';
    }
})
