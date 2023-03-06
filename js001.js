$(document).ready(function(){

    $('nav li').click(function(){

        let i = $(this).index();

        $('article').removeClass('on')
        $('article').eq(i).addClass('on')

        $('header').addClass('on')
    })

    $('nav li').eq(0).click(function(){
        $('header').removeClass('on')
    })
    
})