const buttonTop = document.querySelector("#toTop");

$(window).on('load',function(){
    $('.gallery').liMarquee({
        circular:true,
        startShow:false,
        scrollamount: 200,
        scrolldelay: 0,
        loop: -1,
        drag:true,
    });
    $('.venobox').venobox({
        spinner :'double-bounce',
        numeration: true,
        numerationColor: '#ffffff',
    });

})

const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
        buttonTop.style.display = "flex";
    } else {
        buttonTop.style.display = "none";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

buttonTop.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}



