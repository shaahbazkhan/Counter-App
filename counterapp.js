const content=document.querySelector('#counter');
const increment=()=>{
    //get the value from UI
    let value=parseInt(content.innerText);
    //update the value
    value=value+1;
    //set the value onto UI
    content.innerText=value;
}
const decrement=()=>{
    //get the value from UI
    let value=parseInt(content.innerHTML);
    //update the value
    value=value-1;
    //set the value onto UI
    content.innerText=value;
}