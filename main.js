$(document).ready(function() {
    // stop form submission to server
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        // adding new item to list
        $('.shopping-list').append(
            '<li>' + '<span class="shopping-item">' + $("#shopping-list-entry").val() 
            + '</span>'  
            + '<button class="shopping-item-toggle">' + '<span class="button-label">' 
            + 'check' + '</spam></button>' 
            + '<button class="shopping-item-delete">' + '<span class="button-label">'
            + 'delete' + '</spam></button></li>'

        );

        // clear the input box in form
        $(this)[0].reset();
    });

    // delete item from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    });

    // check items in list
    $('.shopping-list').on('click', '.shopping-items-toggle', function(){
        console.log('hello toggle');
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});