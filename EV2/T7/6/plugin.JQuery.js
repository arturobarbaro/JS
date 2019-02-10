$.fn.clickea = function(){
    $(this).on('click', function () {
        $(`<img src="photos/${$parent.attr('data-loc')}.jpg"></img><figcaption>Weather: ${$parent.attr('data-temp')}</figcaption>`)
        .appendTo($(this).parent());
    });
};

$.fn.info = function(){
    for (var i = 0; i < this.length; i++) {
        $(`<img src="photos/${$parent.attr('data-loc')}.jpg"></img><figcaption>Weather: ${$parent.attr('data-temp')}</figcaption>`)
        .appendTo($(this[i]).parent());
    }
};
