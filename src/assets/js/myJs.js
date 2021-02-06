// code js du composant agences
// je dois importer $ pour qu'il voir la bibliotheque jquery ajouté si nn le projet ne demarre pas 
import $ from 'jquery';
$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

// code js du composant navbar
$(document).ready(function () {
	$('.navbar-light .dmenu').hover(function () {
			$(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		}, function () {
			$(this).find('.sm-menu').first().stop(true, true).slideUp(105)
		});
	});
