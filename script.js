

window.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('button');
	var show = document.getElementById('show');
	var hide = document.getElementById('hide');
	var menu = document.getElementById('responsive-menu');

	btn.addEventListener('click', function () {
		menu.classList.toggle('disabled');
		hide.classList.toggle('disabled');
		show.classList.toggle('disabled');
		button.classList.toggle('open')
	});

});
	$("button").on("click", function() {
  $(".responsive-menu").addClass("open");
})