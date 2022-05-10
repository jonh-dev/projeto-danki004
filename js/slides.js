$(function(){
    $('.mosaico .center .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        infinite:true,
        autoplay:true,
        responsive: [
            {
                breakpoint:950,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 4
                }
            },  
            {
                breakpoint:768,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },  
            
            {   breakpoint:580,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                }
            },

            {
                breakpoint:380,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                }
            }
        ]  
    });

    $('.tratamento .center').slick({
            centerMode:true,
            slidesToShow: 3,
            arrows:false,
            infinite:false,
            responsive:[
                {
                    breakpoint:950,
                    settings:{
                        arrows:false,
                        dots:true,
                        infinite:false,
                        centerMode:false,
                        slidesToShow:2
                    }
                },

                {
                    breakpoint:768,
                    settings:{
                        arrows:false,
                        dots:true,
                        infinite:false,
                        centerMode:false,
                        slidesToShow:1
                    }
                }

            ]
    });

    $('.depoimento-wraper').slick({
        centerMode:false,
        slidesToShow: 1,
        dots:true,
        arrows:false,
        infinite:false,
    })

})