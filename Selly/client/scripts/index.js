/**
 * Created by foxy on 02.03.15.
 */
$(document).on('ready', function () {
    var currentScrollTop = 0,
        targetScrollHeight = $('.launcher').innerHeight(),
        windowTarget = $(window),
        sidebar = $('aside'),
        pushContent = $('.push');


    function showElem(target) {
        if (!target.hasClass('show')) {
            target.addClass('show');
        }
    }

    function hideElem(target) {
        if (target.hasClass('show')) {
            target.removeClass('show');
        }
    }

    windowTarget.scroll(function () {
        currentScrollTop = windowTarget.scrollTop();

        if (currentScrollTop >= targetScrollHeight) {
            showElem(sidebar);
            showElem(pushContent);
        } else {
            hideElem(sidebar);
            hideElem(pushContent);
        }
    });
});
