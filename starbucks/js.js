$(document).ready(function(){

    // 순차적으로 opacity1로 변환
    $('.luck1').stop().animate({'opacity' : 1}, 800,function(){
        $('.tea1').stop().animate({opacity : 1}, 900, function(){
            $('.tea2').stop().animate({opacity : 1}, 910, function(){
                
            })
        })
    })

    $('.search a').click(function(){
        $('.search').animate({width : '160px'},800,function(){
            $('.search').find('input').animate({opacity : '1'},200)
        })
    });

    // menu:hover > sub_menu
    $('.gnb li').mouseenter(function(){

    });


    $(window).scroll(function(){
        let sc = $(this).scrollTop()

        if(sc>=400 && sc<1200){
            $('.promo_img').stop().animate({left :0}, 1000)
            $('.promo_txt').stop().animate({right :0}, 1000)
            $('.promo_img').stop().animate({opacity : 1}, 1000)
        }
        else{
            $('.promo_img').stop().animate({left :'-40%'} , 1000)
            $('.promo_txt').stop().animate({right :'-40%'} , 1000)
        }
    })

})