const Toggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-menu")

Toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display== "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display ="none";
    }
}