






//============ navbar color changingchanging===================
let nav=document.getElementById('navbar');
const root=document.documentElement;

window.addEventListener('scroll',changeColor);

function changeColor(){
    if(window.scrollY >80){
      nav.style.backgroundColor='white';
      root.style.setProperty('--staticColor','#242933')   
    }
    else{
        nav.style.backgroundColor='';
        root.style.setProperty('--staticColor','#fff')
    }
}

//============ navbar color changing ends===================



// ====================togggle=============

const navList=document.querySelector('.nav-list');

function barClicked()
{
    navList.classList.toggle('show');
    root.style.setProperty('--staticColor','#242933')
    nav.style.backgroundColor='white'; 
}



// ====================togggle ends=============





// footer

function clicked(num){


    switch(num)
    {
        case 1:
            document.getElementById('li1').classList.toggle('show');
            break;

        case 2:
            document.getElementById('li2').classList.toggle('show');
            break;
            
        case 3:
            document.getElementById('li3').classList.toggle('show');
            break;

        case 4:
            document.getElementById('li4').classList.toggle('show');
            break;


    }
}

