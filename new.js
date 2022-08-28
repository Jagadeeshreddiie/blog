let btn=document.querySelector('.show_div');

let div=document.querySelector('.faculty');
btn.addEventListener('click',()=>{
        if(div.style.display==='block'){
            div.style.display='none';
        }
        else{
            div.style.display='block';
        }
})