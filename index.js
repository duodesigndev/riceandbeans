

function toggleMenu(x) {
    x.classList.toggle("animate")
    document.getElementsByTagName('body')[0].classList.toggle('perspective')
    document.getElementsByClassName('main-container')[0].classList.toggle("animate-main")
}

$(function(){
    $("#headerContent").load("header.html");
});
