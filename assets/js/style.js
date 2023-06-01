objectFitImages('img.objectfit');

$('#es .sec01 .list__txtbox').matchHeight();
$('#es .sec05__lead').matchHeight();
$('#es .sec05__txt').matchHeight();
$('#es .sec09__lead').matchHeight();

var scrollPosition;
$('.header__ham, .header__logo, .header__link').on('click', function() {
    const logo = $('.header__logo source');
    console.log(logo.attr('srcset'));

    if ($('.header').hasClass('open')){
        $('.header').removeClass('open');
        logo.attr('srcset', '/assets/img/logo05.svg');
        window.scrollTo(0, scrollPosition);
    } else {
        scrollPosition = $(window).scrollTop();
        $('.header').addClass('open');
        logo.attr('srcset', '/assets/img/logo06.svg');
    };
});

$('.header__link').on('click', function() {
    $('.header__link').removeClass('on');
    if (!$(this).hasClass('on')){
        $(this).addClass('on');
    };
})

$('#es .sec01 .list__blk .anchor').on('click', function() {
    $('#es .sec01 .list__blk').removeClass('on');
    if (!$(this).parent().hasClass('on')){
        $(this).parent().addClass('on');
    };
});

$('a[href^="#"]').click(function () {
    var h = 500;
    var g = $(this).attr('href');
    var j = $(g == '#' || g == '' ? 'html' : g);
    var h = $('.header').innerHeight();
    if ($(window).width() < 901) {
        var f = j.offset().top - h;
    } else {
        var f = j.offset().top;
    }
    $('html, body').animate({
        scrollTop: f
    }, h, 'swing');
    return false
});

$(window).on('scroll load', function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    $(".anime, .slide, .yoko").each(function() {
      //各box要素のtopの位置
        var elem_pos = $(this).offset().top;
        //タイミング
        if (scrollTop >= elem_pos - (windowHeight - windowHeight / 5)) {
            $(this).addClass("vis");//特定の位置を超えたらクラスを追加
        }
    });
});

$('.sec04__ttl, .sec12__ttl, .sec05__top, .sec08__before').on('click', function() {
    $(this).next().slideToggle();
    if ($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});

if (window.matchMedia('(max-width: 900px)').matches) {
    $('.sec09__dscttl').on('click', function() {
        $(this).next().slideToggle();
        if ($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
} else {
    $('.sec09__dscttl .accordion').on('click', function() {
        $(this).parent().next().slideToggle();
        if ($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
}

var swiper04 = new Swiper('.sec11__slide', {
    effect: 'cards',
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).on('scroll load', function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var mvheight = $('.mv').innerHeight();
    if(scrollTop > mvheight){
        $('.float').addClass('vis');
    } else {
        $('.float').removeClass('vis');
    };
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $('#footer').innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
        $('.float').css({
            position: 'absolute',
            bottom: footHeight,
        });
    } else {
        $('.float').css({
            position: 'fixed',
            bottom: 0,
        });
    }
});

$(function (){
    const hash = location.hash;

    if(hash){
        //ページ遷移後のスクロール位置指定
        $("html, body").stop().scrollTop(0);
        //処理を遅らせる
        setTimeout(function(){
            var header = $('.header').innerHeight();
            //リンク先を取得
            const target = $(hash),
            //リンク先までの距離を取得
            position = target.offset().top - header;
            //指定の場所までスムーススクロール
            $("html, body").animate({scrollTop:position}, 500, "swing");
        });
    }
})