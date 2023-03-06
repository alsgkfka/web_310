$(document).ready(function(){

    let i = 0

    // 버튼을 클릭했을때 box가 돌아라 45deg
    $('.left').click(function(){
    i++;
        $('.box').css({'transform' : 'rotateY('+45*i+'deg)'})
    })

    i--;
    $('.right').click(function(){
        $('.box').css({'transform' : 'rotateY('+45*i+'deg)'})
    })

    
    function timer(){
        $('.left').trigger('click')
    }

    let slide = setInterval(timer,2000);

    // mousesenter -> inner -> deleteInterval
    $('.inner').mouseenter(function(){
        clearInterval(slide)
    })

    // mouseleave -> setInterval
    $('.inner').mouseleave(function(){
        slide = setInterval(timer,2000)
    })
})