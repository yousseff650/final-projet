$( document ).ready(function() {
    $('.leftmenutrigger').on('click', function(e) {
    $('.side-nav').toggleClass("open");
    e.preventDefault();
   });
});
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });