$(document).ready(function(){
  $('.tweet-compose').focusin('click', function() {
    $('#tweet-controls').removeClass('hide')
    $(this).css('height', '5em');

  })
  $('html').focusout('click', function(){
    $('.tweet-compose').css('height', '2.5em')
  })


  // $('.tweet-content').keyup(function() {
  //   var kCount = 140 - ($(this).val.length)
  //   $('#char-count').html(kCount)
  //   if(kCount < 10) {
  //     $('#char-count').css('color', 'red')
  //     )
  //
  //   }
  // })






})
