
const display=document.querySelector(".display");
let value=parseInt(display.innerText);
const btn=document.querySelector(".reset");
const inc=()=>{
    value+=1;
    display.innerHTML=value;
    btn.classList.remove("left");
}
const dec=()=>{
    value-=1;
    display.innerHTML=value;
    btn.classList.add("left");
}
const reset=()=>{
    value=0;
    display.innerText=value;
    btn.classList.remove("left");
}