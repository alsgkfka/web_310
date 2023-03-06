$(document).ready(function(){

    // container li click -> find index
    $('.container li').click(function(){
        let i = $(this).index()
        console.log(i)

        // i -> gallery img p
        // p -> show
        $('.box_img p').eq(i).fadeIn('fast') //fadeIn : 서서히보여라, fadeOut : 서서히사라져라
    });

    //left click -> container move
    let a = 0;

    $('.left').click(function(){
        if(a<14)
        a++;

        let wd = $('.container li').width()
        console.log(a)

        $('.container ul').css({left : (-wd)*a })
        $('.box_img p').fadeOut('slow')
        $('.box_img p').eq(a).fadeIn('fast')
        
    });

    $('.right').click(function(){
        if(a>0)
        a--;

        let wd = $('.container li').width()
        console.log(a)

        $('.container ul').css({left : (-wd)*a })
        $('.box_img p').fadeOut('slow')
        $('.box_img p').eq(a).fadeIn('fast')

    });

    // box_img p -> show next image
    // setInterval(,time)

    let b = 0;
    setInterval(function(){
        if(b<14)
        b++;
        if(b==14)
        b=0;

        console.log(b)

        $('.box_img p').fadeOut('slow')
        $('.box_img p').eq(b).fadeIn('fast')
    },2000)


    

})