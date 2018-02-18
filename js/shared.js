(function()
{

    // get current page
    var curr = location.href.split('/').reverse()[0].split('#')[0].split('?')[0]

    // highlight navbar
    $("nav").find(".active").removeClass('active');
    $("nav").find('a[href$="' + curr + '"]').parent().addClass('active');

})();