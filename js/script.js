function about_text() {
    let about_p = $('.about .text p')
    let index = about_p.length - 1

    let p = setInterval(() => {
        $(about_p[index]).addClass('stop-animate')
        $(about_p[index - 1]).addClass('start-animate')
        index --
        if (index == -1 ) {
            clearInterval(p)
            $('<hr>').insertAfter('.about .text')
            $('.about .contain').css('transform', 'scale(1)')
            $('.result').css('transform', 'scale(1)')
        }
    }, 1000);
}

function aboutBg() {
    for (let index = 0; index < 3; index++) {
        $('<div class = "img-bg-left p-absolute"></div>').insertAfter('.about .image .img-bg-2')
        $('<div class = "img-bg-right p-absolute"></div>').insertAfter('.about .image .img-bg-2')
    }

    let circ_1 = $('.about .image .img-bg-left')
    let circ_2 = $('.about .image .img-bg-right')
    let circ_width = $(circ_1).width() / 16

    for (let index = 0; index < circ_1.length; index++) {
        if (index == 1) {
            circ_width = circ_width - 3
            $(circ_1[index]).css({
                'width': circ_width + "rem",
                'height': circ_width + "rem",
                'left': '15%',
                'transform': 'translateX(-15%)'
            })

            $(circ_2[index]).css({
                'width': circ_width + "rem",
                'height': circ_width + "rem",
                'right': '15%',
                'transform': 'translateX(15%)'
            })
        }

        if (index > 1) {
            circ_width = circ_width - 3

            $(circ_1[index]).css({
                'width': circ_width + "rem",
                'height': circ_width + "rem",
                'left': '6%',
                'transform': 'translateX(-6%)'
            })

            $(circ_2[index]).css({
                'width': circ_width + "rem",
                'height': circ_width + "rem",
                'right': '6%',
                'transform': 'translateX(6%)'
            })
        }
    }
}

function myResult() {
    let result_p = $('.result .text p')
    let index = result_p.length
    let p = setInterval(() => {
        $(result_p[index]).addClass('stop-animate')
        $(result_p[index - 1]).addClass('start-animate')
        index--
        if (index == -1) {
            clearInterval(p)
            $('.result .contain').addClass('show-scale')
            $('.result hr').addClass('show-scale')
        }
    }, 1000);
}

$(window).scroll(function () {
    let check = $('.result .contain').hasClass('show-scale')
    let height = $(window).scrollTop()
    if (height > 50 && check != true) {
        myResult()
    }
})

$(function () {
    
    about_text()
    
    aboutBg()

})