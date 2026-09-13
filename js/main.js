// ! navbar global section start

const menuBtn = document.getElementById('menu_btn');
const minMenu = document.getElementById('min_menu');


menuBtn.addEventListener('click', () => {
    const open = minMenu.classList.toggle('open');

    if (minMenu.classList.contains('open')){
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark text-lg"></i>` ;
    }else{
        
        menuBtn.innerHTML = `<i class="fa-solid fa-bars text-lg"></i>` ;
    }

});

// ? navbar global section start