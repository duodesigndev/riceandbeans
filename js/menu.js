export default (() => {
    var init = () => {
        initEvents();
    },
    initEvents = () => {
        $('#mobileMenu').live({
            click: (x) => {
                toggleMenu(x)
            }
        })
    },
    toggleMenu = (x) => {
        //$(x)[0].classList.toggle('animate')
        $('#mobileMenu')[0].classList.toggle('animate')
        document.getElementsByTagName('body')[0].classList.toggle('perspective')
        document.getElementsByClassName('main-container')[0].classList.toggle('animate-main')
        document.getElementsByClassName('menu-mobile')[0].classList.toggle('animate-menu-mobile')
    };
    return { init: init };
})();