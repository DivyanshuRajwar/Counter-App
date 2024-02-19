
const display=document.querySelector(".display");
let value=parseInt(display.innerText);
const inc=()=>{
    value+=1;
    display.innerHTML=value;
}
const dec=()=>{
    value-=1;
    display.innerHTML=value;
}
const reset=()=>{
    value=0;
    display.innerText=value;
}