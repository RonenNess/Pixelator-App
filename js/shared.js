(function()
{

    // get current page
    var curr = location.pathname.substr(1);

    // highlight navbar
    if (curr.length > 0)
    {
        $("nav").find(".active").removeClass('active');
        $("nav").find('a[href$="' + curr + '"]').parent().addClass('active');
    }
})();