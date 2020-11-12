$(document).ready(function() {
    // stop form submission to server
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        // adding new item to list
        $('.shopping-list').append(
            '<li>' + '<span class="shopping-item">' + $("#shopping-list-entry").val() 
            + '</span>'  
            + '<button class="shopping-item-toggle">' + '<span class="button-label">' 
            + 'check' + '</span></button>' 
            + '<button class="shopping-item-delete">' + '<span class="button-label">'
            + 'delete' + '</span></button></li>'

        );

        // clear the input box in form
        $(this)[0].reset();
    });

    // delete item from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    });

    // check items in list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});

/*

Better approach to appending HTML
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

<!-- In HTML -->
<template id="new-shopping-item">
    <li>
        <span class="shopping-item">
            <!-- {NEW_SHOPPING_ITEM} -->
        </span>  
        <button class="shopping-item-toggle">
            <span class="button-label"> 
                check
            </span>
        </button> 
        <button class="shopping-item-delete">
            <span class="button-label">
                delete
            </span>
        </button>
    </li>
</template>

<!-- In JS -->
var template = document.querySelector('#new-shopping-item');

// Clone the new row and insert it into the table
var clone = template.content.cloneNode(true);
var shopping_item = clone.querySelector(".shopping-item");

shopping_item.textContent = $("#shopping-list-entry").val();
$('.shopping-list').append(clone);
*/