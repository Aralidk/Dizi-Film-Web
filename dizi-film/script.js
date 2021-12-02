
/* MENÜ GÖSTERME BÖLÜMÜ BAŞLANGIÇ */
var navbar = document.querySelector(".navbar");
var fa_bars = document.querySelector(".fa-bars");
var logo = document.querySelector(".logo");
var menu_arama = document.querySelector(".menu-arama");
var profil_buton = document.querySelector(".profil-buton");
var sidebar = document.querySelector(".sidebar");
var govde = document.querySelector(".govde");
var menu_durum = "açık";

function menu_hareket(){
    if(menu_durum == "açık" ){
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";

        fa_bars.style.position = "absolute";
        fa_bars.style.top = "10px";
        
        logo.style.position = "absolute";
        logo.style.right = "30px";
        logo.style.top = "30px";
        
        menu_arama.style.display = "none";
    
        profil_buton.style.display = "none";
        
        sidebar.style.left = "-70px";

        govde.style.padding = "0";

        menu_durum = "kapalı";
    }
    else{
        navbar.style.backgroundColor = "rgb(50, 50, 50)";
        navbar.style.boxShadow =  "0 1px 10px black";

        fa_bars.style.position = "relative";
        fa_bars.style.top = "unset";

        logo.style.position = "relative";
        logo.style.right = "unset";
        logo.style.top = "unset";
    
        menu_arama.style.display = "flex";
    
        profil_buton.style.display = "flex";

        sidebar.style.left = "0";
        
        govde.style.padding = "55px 0 0 55px";

        menu_durum = "açık";
    }
}
/* MENÜ GÖSTERME BÖLÜMÜ BİTİŞ */
