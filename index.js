
       let displays=document.getElementById('display');
       let buttons=Array.from(document.getElementsByClassName('button'));
       console.log(buttons)
       buttons.map(button=>{
button.addEventListener('click',(e)=>{
switch(e.target.innerText){
    case 'c':
        displays.innerText='';
        break;
        case '⭠':
            if(displays.innerText){
                displays.innerText=displays.innerText.slice(0,-1);
            
            }
            break;
case '=':
    try{

        displays.innerText=eval(displays.innerText);



    }catch{
        displays.innerText="error!"
    }
    break;
    default:
        displays.innerText+=e.target.innerText;
}
});
       });
    