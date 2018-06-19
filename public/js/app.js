$('.newburgerTable').on('click', '.devourBurger', function () {
    ($(this).attr('status', 1));
    var id = ($(this).attr('burgerId'));
    var devoured = ($(this).attr('status'));

    $.ajax("/index/" + id, {
        type: "PUT",
        data: {
            devoured: devoured
        }
    }).then(
        function () {
            // Reload the page to update tables
            window.location.reload(true);

        });
});

$(function validate() {
    $('.ui.form')
        .form({
            fields: {
                burger: {
                    identifier: 'burger',
                    rules: [{
                        type: 'empty',
                        prompt: 'Burger name can not be empty'
                    }, {
                        type: 'minLength[3]',
                    }, {
                        type: 'maxLength[20]',
                    }]
                }
            }
        });
});