let about_p = $('.about p')
function about_text() {
    let about_p = $('.about p')
    let index = about_p.length - 1

    let p = setInterval(() => {
        $(about_p[index]).addClass('stop-animate')
        $(about_p[index - 1]).addClass('start-animate')
        index --
        if (index == -1 ) {
            clearInterval(p)
        }
    }, 1000);
}

$(function () {
    console.log(about_p)
    about_text()
})