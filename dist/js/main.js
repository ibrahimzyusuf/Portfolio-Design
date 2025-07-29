const menu_btn=document.querySelector('.menu_btn')
const hamburger=document.querySelector('.menu_btn_burger')
const nav=document.querySelector('.nav')
const nav_menu=document.querySelector('.nav_menu')
const nav_items=document.querySelectorAll('.nav_menu_item')

let show_menu=false

const toggleMenu=()=>{
    if (!show_menu) {
        hamburger.classList.add('open')
        nav.classList.add('open')
        nav_menu.classList.add('open')
        nav_items.forEach(item=>item.classList.add('open'))

        show_menu=true
    }
    else{
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        nav_menu.classList.remove('open')
        nav_items.forEach(item=>item.classList.remove('open'))

        show_menu=false
    }
}

menu_btn.addEventListener('click',toggleMenu)

