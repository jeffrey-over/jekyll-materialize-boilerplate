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



  var formData = {
  "first_name": $('#first_name').val(),
  "last_name": $('#last-name').val(),
  "email": $('#email').val()  
}

// Then listen to the form submit event
$('#kennismaken').submit(function(evt) {
  evt.preventDefault(); //Prevent the default form submit action

  // You have formData here and can do this:
 

  firebase.database().ref().push( formData ); // Adds the new form data to the list under formDataTree node
})
});
