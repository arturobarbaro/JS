$.fn.clickea = function(){
    $(this).on('click', function () {
        $(`<img src="photos/${$(this).parent().attr('data-loc')}.jpg"></img><figcaption>Weather: ${$(this).parent().attr('data-temp')}</figcaption>`)
        .appendTo($(this).parent());
    });
};

$.fn.info = function(){
    for (var i = 0; i < this.length; i++) {
        $(`<img src="photos/${$(this[i]).parent().attr('data-loc')}.jpg"></img><figcaption>Weather: ${$(this).parent().attr('data-temp')}</figcaption>`)
        .appendTo($(this[i]).parent());
    }
};
