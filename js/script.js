new WOW().init();



jQuery('a[href^="#"]').on('click',function(){

var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
 if ( id != '#'){
 position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
900);
});

let $form = $( '#js-form' )
$form.submit(function(e) {
 $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType:"xml",
    statusCode: {
    0: function () {
     $form.slideUp()
     $( '#js-success' ).slideDown()
    },
    200: function () {
    $form.slideUp()
    $( '#js-error' ).slideDown()
    }
  }
 });

 return false;
});

let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea' ).on( 'change', function(){
 if(
 $( '#js-form input[type="text"]' ).val() !== ""&&
 $( '#js-form input[type="email"]' ).val() !== ""&&
 $( '#js-form input[name="entry.630969603"]' ).prop( 'checked' ) === true
  ){
 $submit.prop( 'disabled', false)
 $submit.addClass( 'is-active')
  }else {
 $submit.prop( 'disabled', true)
 $submit.removeClass( 'is-active')
  }
})


jQuery('.drawer-icon').on('click',function(e){
 e.preventDefault();

jQuery('.drawer-icon').toggleClass('is-active');
jQuery('.drawer-content').toggleClass('is-active');

 return false;

});
