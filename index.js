$(function() {

    // CSS Class that represents the client        
    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    $("body").removeClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                    slitslider.next();
                    $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    $("body").removeClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                    slitslider.previous();
                    $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $("body").removeClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                            $("body").addClass($(slitslider.$slides[slitslider.current]).attr("data-client-name"));
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});

function toggleMenu(x) {
    x.classList.toggle("animate")
    document.getElementsByTagName('body')[0].classList.toggle('perspective')
    document.getElementsByClassName('main-container')[0].classList.toggle("animate-main")
}

$(function() {
    $("#headerContent").load("header.html");
});
