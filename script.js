let input = document.getElementById('num');
let buttons = document.querySelectorAll('button');

let res="";
let arr = Array.from(buttons);
arr.forEach(button => {
   button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        res = eval(res);
        input.value = res;
    }
     else if(e.target.innerHTML == 'AC'){
        res="";
        input.value=res;
     }
     else if(e.target.innerHTML =='DEL'){
        res = res.substring(0,res.length-1);
        input.value = res;
     }
     else{
     res = res + e.target.innerHTML;
     input.value = res;
     }
   })
})