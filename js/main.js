// This one is a general file mostly for user events and UI manipulation
jQuery(document).ready(function(){

	// When the login form is submitted
	jQuery("#login").on("click", function(event){

		// Gather the form data the user entered
		var username = jQuery("input[name='username']").val();
		var pass = jQuery("input[name='userpass']").val();

		// Call the login function from js/users.js
		login_user(usersObj, username, pass);

	});


	// When logout button is pressed call logout function from js/users.js
	jQuery("#logout").on("click", function(){
		logout_user();
	});


	// When the user clicks categories on the navbar
	jQuery(".nav-link").on("click", function(e){
		// Prevent default link behavior
		e.preventDefault();

		// Get the category id attribute to identify the category
		var clicked_id = jQuery(this).attr("data-category");

		// Hide all the products
		jQuery(".product").addClass("hidden");

		// Show only the products within that category clicked
		jQuery(".product."+clicked_id).removeClass("hidden");

	});

	// When the user clicks Sub categories on the navbar
	jQuery(".dropdown-item").on("click", function(e){
		// Prevent default link behavior
		e.preventDefault();

		// Get the category id attribute to identify the category
		var clicked_id = jQuery(this).attr("data-category");
		var parent_id = jQuery(this).attr("data-parent");

		// Hide all the products
		jQuery(".product").addClass("hidden");

		// Show only the products within that category clicked

		jQuery(".product."+clicked_id+"."+parent_id).removeClass("hidden");

	});


	

	// when view all is press, remove hidden class on all
	jQuery(".view-all").on("click", function(e){
		e.preventDefault();
		jQuery(".product").removeClass("hidden");
	});

	// Login details for testing
	jQuery("#getlogin").on("click", function(e){
		e.preventDefault();
		jQuery("#details-table").toggleClass("hidden");
	});


	


});


