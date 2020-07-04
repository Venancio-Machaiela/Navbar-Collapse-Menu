//Mostrar Menu
function showMenu(){
    document.getElementById("nav-bar").style.width = "220px";
    document.getElementById("btn-show").style.marginLeft = "205px";
    document.getElementById("btn-show").setAttribute("onclick", "hideMenu();");
    document.getElementById("btn-icon").setAttribute("class", "fa fa-angle-left");
}

//Ocultar Menu
function hideMenu(){
    document.getElementById("nav-bar").style.width = "80px";
    document.getElementById("btn-show").style.marginLeft = "65px";
    document.getElementById("btn-show").setAttribute("onclick", "showMenu();");
    document.getElementById("btn-icon").setAttribute("class", "fa fa-angle-right");
}