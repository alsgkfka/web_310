$(document).ready(function(){

    let imgs=''
    
    for(var i = 0; i<200; i++){

        console.log(i);
        imgs+= "<img src='img/pic"+i+".jpg'>"

        $('section').html(imgs)
    };

    $(window).mousemove(function(e){
        let x = e.pageX;
        let wd = $(window).width()
        // '최대거리'에서 '내가움직인거리' 나누기 * 200

        // 연산식
        let num = Math.floor((x/wd)*200)
        

        $('section img').hide()
        $('section img').eq(num).show()
    })

})