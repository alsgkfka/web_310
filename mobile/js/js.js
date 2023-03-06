$(document).ready(function(){

    // time Info

    setInterval(function(){
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        let hNum ;
        let mNum ;
        let sNum ;
        if(sec>=10){
            sNum = sec
        }else{
            sNum = '0'+sec
        }

        if(min>=10){
            mNum = min
        }else{
            mNum = '0'+min
        }

        if(hr>=10){
            hNum = hr
        }else{
            hNum = '0'+h
        }

        $('.phone span').eq(0).text(hNum);
        $('.phone span').eq(1).text(mNum);
        $('.phone span').eq(2).text(sNum);    
    },1000);


    // mode change
    $('nav li').click(function(){
        let txt = $(this).text()
        console.log(txt)

        $('#wrap').removeClass()
        $('#wrap').addClass(txt)

        $('nav li').removeClass('on')
        $(this).addClass('on')

    })


})