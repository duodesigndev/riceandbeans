function toggleMenu(x) {
    x.classList.toggle("animate")
    document.getElementsByTagName('body')[0].classList.toggle('perspective')
    document.getElementsByClassName('main-container')[0].classList.toggle("animate-main")
}

$(function() {
    $("#headerContent").load("header.html");
});

Barba.Pjax.start();

var HideShowTransition = Barba.BaseTransition.extend({
    start: function () {
        this.newContainerLoading.then(this.finish.bind(this));
    },

    finish: function () {
        document.body.scrollTop = 0;
        this.done();
    }
});

Barba.Pjax.getTransition = function () {
    return HideShowTransition;
};