$(document).ready(function(){

    // 브라우저의 높이값 찾기
    let ht = $(window).height();
    console.log(ht)
    // gnb 의 높이를찾아라 
    let gnbht = $('#gnb').height()
    console.log(gnbht)
    //gnb의 가로값을 찾아라.
    let gnbwd = $('#gnb').width()
    console.log(gnbwd)
    
    $('section').height(ht);
    
    // 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아
    // section의 높이값에 대입해라.
    $(window).resize(function(){
    
        let ht = $(window).height();
        $('section').height(ht);
    })

    
    // 마우스움직임 찾아내기 
    
    // .p11 {bottom:20px;right:20px
    // }
    // .p12 {bottom:-40px;right:130px}
    // .p13 {top:180px;right:60px}
    
    // .p21 {bottom:-480px;right:-180px}
    // .p22 {bottom:-40px;right:130px}
    
    // .p31 {bottom:30px;right:180px}
    // .p32 {bottom:-270px;right:110px}
    // .p33 {bottom:-130px;right:-70px}
    
    // .p41 {bottom:-120px;right:20px}
    // .p42 {bottom:-180px;right:0px}
    
    
    // section에서 마우스가 움직였을때, 이미지의 위치값을 바꾸어라. 
    $('section').mousemove(function(e){
    
        let posx = e.pageX;
        let posy = e.pageY;
    
        $('.box h2').eq(0).text(posx);
        $('.box h2').eq(1).text(posy);
    
        $('.p11').css({'bottom':20-posy/30,'right':20+posx/30})
    })

// scroll bar 위치값
$(window).scroll(function(){
    let sc = $(this).scrollTop();
    $('h1').text(sc)

    let ht = $(window).height();
    // if(sc >= ht*0 && sc < ht*1){
    //     $('#gnb li').eq(0).addClass('on')
    //     $('#gnb li').removeClass('on')
    // }
    // if(sc >=ht *1 && sc < ht*2){
    //     $('#gnb li').removeClass('on')
    //     $('#gnb li').eq(1).addClass('on')
    // }
    // if(sc >= ht*2 && sc < ht*3){
        // $('#gnb li').removeClass('on')
    //     $('#gnb li').eq(2).addClass('on')
    //     
    // }
    // if(sc >= ht*3 && sc < ht*4){ 
        // $('#gnb li').removeClass('on')
    //     $('#gnb li').eq(3).addClass('on')
    //    
    // }
    // 반복문설정
    for(var ab=0; ab<5; ab++){
        if(sc>=ht*ab && sc<ht*(ab+1)){
            $('#gnb li').removeClass('on')
            $('#gnb li').eq(ab).addClass('on')
            
        }
    }
});

// 마지막 li 클릭했을때 scrollTop을 해당높이으로 변환
$('#gnb li').click(function(){

    // 클릭했을때 나의 순번찾기
    let i = $(this).index();
    let ht = $(window).height()

    $('html,body').animate({'scrollTop' : ht*i}, 1400, 'easeOutBounce')

    // 클릭했을때 on값 부여
    $('#gnb li').removeClass('on')
    $(this).addClass('on')
})
// h1에 마우스가 들어갔을때 위치값찾기
$('h1').mouseenter(function(){
    let abc = $(this).offset().top
    alert(abc)
})

$('section').mousewheel(function(event,delta){
    if(delta>0){
    let prev = $(this).prev().offset().top;
    $('html,body').stop().animate({scrollTop : prev}, 1300, 'easeInOutBack')}

    else if(delta<0){
    let next = $(this).next().offset().top;
    $('html,body').stop().animate({scrollTop : next}, 1300, 'easeInOutBack')}
})




})