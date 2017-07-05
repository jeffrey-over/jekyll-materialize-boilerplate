//
// Jekyll-Materialize-Boilerplate
// Author: @newaeonweb
//

// Init Materialize javascripts
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.modal-trigger').leanModal();    
  }); // end of document ready
})(jQuery); // end of jQuery name space


    
    
    $(function () {
  $(document).scroll(function () {
    var $nav = $(".change-on-scroll");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());


  });
});
