$(function() {

    // validations to ensure register and login forms are not submitted prior to having data in the desired format.

    // // start by adding event listeners to forms
    // $('form').on('click', '.btn-validate', function(event) {
    //     // prevents default submit behavior, we can trigger it later if validated
    //     event.preventDefault();
    //     console.log('this is ' + this);
    //     console.log('$(this) is ' + $(this));

    // });

    // draggable/droppable sorting lists 
    $(function() {

        $(".draggable").sortable({
            cursor: "move",
            delay: 150,
            distance: 5,
            opacity: 0.5
        });

        $("ul.list1").sortable({
            connectWith: ["ul.list2", "ul.list3", "ul.list4"]

        });
        $("ul.list2").sortable({
            connectWith: ["ul.list1", "ul.list3", "ul.list4"]
        });
        $("ul.list3").sortable({
            connectWith: ["ul.list2", "ul.list1", "ul.list4"]
        });
        $("ul.list4").sortable({
            connectWith: ["ul.list1", "ul.list2", "ul.list3"]
        });
        $('.draggable').on('click', function(event) {
            $(this).fadeOut();
        })
    });
});



/*("#sortable").sortable({
	revert: true,
	stop: function (event, ui) {
		if (!ui.item.data('tag') && !ui.item.data('handle')) {
			ui.item.data('tag', true);
			ui.item.fadeTo(400, 0.1);
		}
	}
});
$("#draggable").draggable({
	connectToSortable: '#sortable',
	helper: 'clone',
	revert: 'invalid'
});
$("ul, li").disableSelection();*/
