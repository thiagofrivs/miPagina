const menu=document.querySelector(".nav")
const openMenu=document.querySelector("#open-menu")
const closeMenu=document.querySelector("#close-menu")
const menuItems=document.querySelectorAll(".nav > li")

openMenu.addEventListener("click",(e)=>{
    menu.classList.add("visible")
    openMenu.classList.add("hidden-mobile")
})

closeMenu.addEventListener("click",(e)=>{
    menu.classList.remove("visible")
    openMenu.classList.remove("hidden-mobile")
})



menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("visible");
    })
})