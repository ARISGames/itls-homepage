$(function(){

    // homepage: career drawers
    $('.career-options article').each(function(i, path){
        path = $(path);
        var details = path.find('.career-details');
        details.hide();
        var btn = path.find('.career-button');
        path.find('.career-button').click(function(e){
            e.preventDefault();
            var b = details.is(':visible');
            $('.career-details').hide();
            if (!b) details.show();
            btn.html(b ? 'Learn more' : 'Hide');
        });
    });

    // smooth scroll
    $('a[href^="#"]:not([data-toggle="tab"]):not(.career-button):not(.apply-collapse-header)').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-40
        }, 500, 'swing', function () {
        });
    });

    // apply: requirements and faq drawers
    // courses: lists of course syllabi
    var open = 'apply-collapse-open';
    $('.apply-collapse-header').click(function(e){
        e.preventDefault();
        var header = $(e.target);
        var isOpen = header.parents('article').hasClass(open);
        header.parents('.apply-collapse-section').find('article').removeClass(open);
        if (!isOpen) header.parents('article').addClass(open);
    });

    // faculty pages: tables of contents
    var toc = $('#table-of-contents');
    $('.itls-styled').find('h2').each(function(i, x) {
        toc.append(`<li><a href="#${x.id}">${$(x).text()}</a></li>`);
    });

    // mobile navigation
    $(document).ready(function() {
        $('.nav-toggle').click(function(){
          $('.nav-wrap, .nav-icon').toggleClass('nav-open');
      });
    });

});
