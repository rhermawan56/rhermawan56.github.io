// dark mode =======================================================================================
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
    }, 500);
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

let result_p = $('.result .text p')
function myResult() {
    $('.result .contain').addClass('show-scale')
    $('.result hr').addClass('show-scale')
}

let skills_p = $('.skills .text p')
function skills() {
    $('.skills .contain').addClass('show-scale')
    $('.skills hr').addClass('show-scale')
}

function myAnimate(obj, fun) {
    let index = obj.length
    let p = setInterval(() => {
        $(obj[index]).addClass('stop-animate')
        $(obj[index - 1]).addClass('start-animate')
        index--
        if (index == -1) {
            clearInterval(p)
            if (fun == 'result') {
                myResult()
            }
            if (fun == 'skills') {
                skills()
            }
        }
    }, 500);
}

$(window).scroll(function () {
    let check_result = $('.result .contain').hasClass('show-scale')
    let check_skills = $('.skills .contain').hasClass('show-scale')
    let height = $(window).scrollTop()
    console.log(height)
    if (height > 50 && check_result != true) {
        myAnimate(result_p, 'result')
    }
    if (height > 300 && check_skills != true) {
        myAnimate(skills_p, 'skills')
    }
})

$('.tMode span').click(function () {
    let check_mode = $(this).index()
    console.log(check_mode)
    if (check_mode == 0) {
        $(this).toggleClass('size')
        $($('.tMode span')[1]).toggleClass('size')
        $('body').toggleClass('dark')
        $('.about .text p').toggleClass('title-dark')
        $('.result .text p').toggleClass('title-dark')
        $('.skills .text p').toggleClass('title-dark')
        $('.about .content-text p').toggleClass('font-dark')
    } else {
        $(this).toggleClass('size')
        $($('.tMode span')[0]).toggleClass('size')
        $('body').toggleClass('dark')
        $('.about .text p').toggleClass('title-dark')
        $('.result .text p').toggleClass('title-dark')
        $('.skills .text p').toggleClass('title-dark')
        $('.about .content-text p').toggleClass('font-dark')
    }
})

$(function () {
    
    about_text()
    
    aboutBg()

    

})