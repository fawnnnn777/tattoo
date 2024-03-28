$(document).ready(()=>{
    $(window).scroll(()=>{
    let scrollPosition = $(window).scrollTop()
    let title = $('.title');
    console.log(scrollPosition)
    let $skulltop = $('.skull-top');
    let $skullbotton = $('.skull-botton');
        $skullbotton.css("transform", `translate(0, ${scrollPosition*1.5}px)`);
        $skulltop.css("transform", `translate(0, -${scrollPosition}px)`);
        if(scrollPosition >= 100){
            title.css('display', 'block')
            title.css('animation','title 0.5s')
        }
        else{
            title.css('display','none')
        }
    })
})