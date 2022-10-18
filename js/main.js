$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header_menu').toggleClass('open-menu');
        $('.main').toggleClass('open-menu');
        $('.social').toggleClass('open-menu');
       
        
       
    });
    
});

$('.menu__list-item').on('click', function(){
    $('.header_menu').removeClass('open-menu'); 
    $('.main').removeClass('open-menu');
    $('.social').removeClass('open-menu');
});

$('.header__logo-text').on('click', function(){
    $('.header_menu').removeClass('open-menu'); 
    $('.main').removeClass('open-menu');
    $('.social').removeClass('open-menu');
});

 $(function () {
  new AOS.init();
 })

 $(document).ready(function(){
    $('#contact-form').submit(function(){
            // var subject = $(this).find("#subject :selected").text();
            var name = $(this).find("#name").val();
            var email = $(this).find("#email").val();
            var message = $(this).find("#message").val();

            if(!!name && !!email && !!message){
                $.ajax({
                    type: "POST",
                    url: "/email.php",
                     data: { "name": name,"email": email, "message": message},
                    cache: false,
                    success: function(){
                        $('.success').toggleClass('opens');
                    }
                })
            }
        return false;
    });
});