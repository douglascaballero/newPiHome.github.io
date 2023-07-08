var box_menu = document.getElementById('box_menu');
var open = false;

function go_to(x,y){
    scrollTo(x,y)
}

function slide(){
    if(open){
        slide_in();
    }
    else{
        slide_out();
    }
}


function slide_in(){
    var header_section = document.getElementById('header_section');
    var box_menu = document.getElementById('box_menu');
    var textos = document.getElementById('textos');
    var textos1 = document.getElementById('textos1');
    var textos2 = document.getElementById('textos2');
    var textos3 = document.getElementById('textos3');
    var textos4 = document.getElementById('textos4');
    var textos5 = document.getElementById('textos5');
    var textos6 = document.getElementById('textos6');
    var textos7 = document.getElementById('textos7');
    var textos8 = document.getElementById('textos8');
    textos.style.display = "none";
    textos1.style.display = "none";
    textos2.style.display = "none";
    textos3.style.display = "none";
    textos4.style.display = "none";
    textos5.style.display = "none";
    textos6.style.display = "none";
    textos7.style.display = "none";
    textos8.style.display = "none";
    box_menu.style.width = "3.5%";
    header_section.style.marginLeft = "2%";
    console.log(box_menu.clientWidth);
    open = false;
}

function slide_out(){
    var header_section = document.getElementById('header_section');
    var box_menu = document.getElementById('box_menu');
    var textos = document.getElementById('textos');
    var textos1 = document.getElementById('textos1');
    var textos2 = document.getElementById('textos2');
    var textos3 = document.getElementById('textos3');
    var textos4 = document.getElementById('textos4');
    var textos5 = document.getElementById('textos5');
    var textos6 = document.getElementById('textos6');
    var textos7 = document.getElementById('textos7');
    var textos8 = document.getElementById('textos8');
    var box_menu_icon = document.getElementById('box_menu_icon')
    box_menu_icon.style.marginTop = "0%"
    box_menu.style.width = "20%";
    textos.style.display = "block";
    textos1.style.display = "block";
    textos2.style.display = "block";
    textos3.style.display = "block";
    textos4.style.display = "block";
    textos5.style.display = "block";
    textos6.style.display = "block";
    textos7.style.display = "block";
    textos8.style.display = "block";
    header_section.style.marginLeft = "20%";
    console.log(box_menu.clientWidth);
    open = true;
}