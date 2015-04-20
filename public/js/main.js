$(function () {

	var input;
	$("#submit").on("click", function (event) {
		event.preventDefault();
		input = "<li>" + $(".input").val() +
			"<button type='button' class='btn btn-danger'>X</button>" +
			"</li>";
		$(".list").append(input).sortable({
			axis: "y",
			containment: "parent"
		});
		$(".input").val("");
	});



	$(".list").on("click", ".btn", function (event) {

		$(this).parent().wrapInner("<del></del>");

		$(this).parent().parent().fadeOut(2000, function () {
			$(this).remove();
		});

	});
});


//works!
$('.draggable').on('click', function (event) {
	$(this).fadeOut();
})