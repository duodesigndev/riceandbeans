export default (() => {

    var $navArrows = $('#nav-arrows'),
        $nav = $('#nav-dots > span'),
        slitslider = $('#slider').slitslider({
            onBeforeChange: (slide, pos) => {

                $nav.removeClass('nav-dot-current');
                $nav.eq(pos).addClass('nav-dot-current');

            }
        }),

        init = () => {

            initEvents();

        },
        initEvents = () => {

            $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));

            // add navigation events
            $navArrows.children(':last').on('click', () => {

                $("body").removeClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                slitslider.next();
                $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                return false;

            });

            $navArrows.children(':first').on('click', () => {

                $("body").removeClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                slitslider.previous();
                $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                return false;

            });

            $nav.each((i) => {

                $(this).on('click', (event) => {

                    var $dot = $(this);

                    if (!slitslider.isActive()) {

                        $("body").removeClass();
                        $nav.removeClass('nav-dot-current');
                        $dot.addClass('nav-dot-current');

                    }

                    slitslider.jump(i + 1);
                    $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                    return false;

                });

            });

        };

    return { init: init };
})();