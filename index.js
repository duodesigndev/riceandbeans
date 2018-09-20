'use strict';

import Page from './js/slider.js';
import Menu from './js/menu.js';

$(() => {
  Barba.Pjax.start();
  Barba.Prefetch.init();
})

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
  
    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);
  
      $(this.oldContainer).hide();
  
      $el.css({
        visibility : 'visible',
        opacity : 0
      });
  
      $el.animate({ opacity: 1 }, 400, function() {
        _this.done();
      });
    }
});
  
Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container, newPageRawHTML) => {
  $('body').attr('class', currentStatus.namespace);
});

Barba.Dispatcher.on('transitionCompleted', () => {
  $("#mainMenuMobile").load("mobile-menu.html");
  $("#headerContent").load("header.html");
  Page.init();
  Menu.init();
});