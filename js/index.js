(function ($) {
    $('document').ready(function () {
        setTimeout(function () {
            if ($(document).scrollTop() < $('#container').offset().top) {
                $('html,body').animate({
                    scrollTop: $('#container').offset().top
                }, 800);
            }
        }, 1500);
        $('.pageone').addClass('pageone-trans');

    })

    function bindEvent() {
        var navBar = $('.nav-bar');
        navBar.on('mouseenter', function () {
            if (!$('.meizu-nav-bar').hasClass('meizu-nav-bar-trans')) {

                $(this).find('.meizu-nav-bar').addClass('meizu-nav-bar-trans');
                // console.log($('.meizu-nav-bar').hasClass('meizu-nav-bar-trans'))
            }
            $(this).find('.meizu-nav-bar').addClass('meizu-nav-bar-show');
            $('.meizu-nav-bar-show').find('li').on('mouseenter', function () {
                $('.meizu-nav-bar-show').find('li').css('opacity', 0.5);
                $(this).css('opacity', 1).on('mouseleave', function () {
                    $(this).css('opacity', 0.5);
                })
            })
        }).on('mouseleave', function () {
            $('.meizu-nav-bar-show').find('li').css('opacity', 1);
            $(this).find('.meizu-nav-bar').removeClass('meizu-nav-bar-show meizu-nav-bar-trans');
        })
        $('.knowmore').on('mouseenter', function () {
            $('.knowmore-mask').attr('display', 'block');
        }).on('mouseleave', function () {
            $('.knowmore-mask').attr('display', 'none');
        })
        //page事件
        $(window).scroll(function () {
            var $scroll = $(document).scrollTop();
            if ($scroll >= ($('#container').offset().top)) {
                $('.meizuth-nav-bar').addClass('meizuth-nav-fix');
                // $('.pageone').addClass('pageone-trans');
            } else {
                $('.meizuth-nav-bar').removeClass('meizuth-nav-fix');
            }
            if ($scroll >= ($('.pagetwo').offset().top) - 200) {
                $('.pagetwo').addClass('pagetwo-end');
            }
            if ($scroll >= ($('.pagethree').offset().top) - 200) {
                $('.pagethree').addClass('pagethree-end');
            }
            if ($scroll >= ($('.pagefour').offset().top) - 200) {
                $('.pagefour').addClass('pagefour-end');
            }
            if ($scroll >= ($('.pagefive').offset().top) - 200) {
                $('.pagefive').addClass('pagefive-end');
            }
            if ($scroll >= ($('.pagesix').offset().top) - 200) {
                $('.pagesix').addClass('pagesix-end');
            }
            if ($scroll >= ($('.pageseven').offset().top) - 200) {
                $('.pageseven').addClass('pageseven-end');
            }
            if ($scroll >= ($('.pageeight').offset().top) - 200) {
                $('.pageeight').addClass('pageeight-end');
            }
            if ($scroll >= ($('.pagenine').offset().top) - 200) {
                $('.pagenine').addClass('pagenine-end');
            }
            if ($scroll >= ($('.pageten').offset().top) - 200) {
                $('.pageten').addClass('pageten-end');
            }
            if ($scroll >= ($('.pageeleven').offset().top) - 200) {
                $('.pageeleven').addClass('pageeleven-end');
            }
            if ($scroll >= ($('.pagetwelve').offset().top) - 200) {
                $('.pagetwelve').addClass('pagetwelve-end');
            }
            if ($scroll >= ($('.pagethirteen').offset().top) - 200) {
                $('.pagethirteen').addClass('pagethirteen-end');
            }

        })

        function mouseMove() {
            $('.pageelenen-phone-wrap').on('mousemove', function (e) {
                var listWidth = $('.pageeleven-phone').width();
                var wrapWidth = $('.pageelenen-phone-wrap').width();
                var num = wrapWidth / listWidth;
                var listLeft = $('.pageeleven-phone').offset().left;
                var wrapLeft = $('.pageelenen-phone-wrap').offset().left;
                var clientX = e.clientX < listWidth / 2 ? e.clientX : listWidth / 2 + 50;
                var endLeft = clientX * num;
                $('.pageeleven-phone').css('left', -endLeft - 40);
            })
        }

        function gesteClick() {
            var gesteVideo = ['./img/hand-01_72335da.mp4', './img/hand-02_9b87593.mp4', './img/hand-03_c6245ae.mp4', './img/hand-04_896db05.mp4'];
            $('.geste-list span').on('click', function () {
                var spanIndex = $(this).index('.geste-list span') + 1;
                $('.geste-list span').removeClass('span-active')
                $(this).addClass('span-active');
                $('.geste-list').attr('class', 'geste-list').addClass('span-active-bar' + spanIndex);
                $('.geste-video video').attr('src', gesteVideo[spanIndex - 1]);
            })
        }
        gesteClick();
        mouseMove();
    }
    bindEvent();
})(jQuery)