check_login_session();
//An object with all the products (15 of them)
//It represts what a typical json response would look like from an API
productsObj = {"products":[
				{
					  "producId":1,
					  "prodName":"Mens Blazer",
					  "prodPrice":1900,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"81Kjgm7RxvL._UX385_.jpg",
					  "visibility":1,
					  "categories": [
					    {"catId":1, "catName":"Men"},
					    {"catId":4, "catName":"Jackets"}
					  ] 
				},
				{
					  "producId":2,
					  "prodName":"Bucket Hat",
					  "prodPrice":300,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"81Rd29z+JzL._SX450_.jpg",
					  "visibility":3,
					  "categories": [] 
				},
				{
					  "producId":3,
					  "prodName":"Black Handbag",
					  "prodPrice":799,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "visibility":3,
					  "prodImg":"910zU0vyBrL._UY395_.jpg",
					  "categories": [
					    {"catId":2, "catName":"Women"}
					  ] 
				},
				{
					  "producId":4,
					  "prodName":"Womens High Coat",
					  "prodPrice":899,
					  "prodDesc":"For Winter",
					  "prodUrl":"#",
					  "prodImg":"1832361_249_f.jpeg",
					  "visibility":2,
					  "categories": [
					    {"catId":2, "catName":"Women"},
					    {"catId":4, "catName":"Jackets"}
					  ] 
				},{
					  "producId":5,
					  "prodName":"Loffers",
					  "prodPrice":1299,
					  "prodDesc":"Some nice saude shoes",
					  "prodUrl":"#",
					  "visibility":3,
					  "prodImg":"a1fb9524gptan00010g999_1.jpg",
					  "categories": [
					    {"catId":3, "catName":"Shoes"},
					    {"catId":1, "catName":"Men"}
					  ] 
				},{
					  "producId":7,
					  "prodName":"Sparkling Heels",
					  "prodPrice":1899,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"AA473400_3pl.jpg",
					  "visibility":2,
					  "categories": [
					    {"catId":2, "catName":"Women"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				},
				{
					  "producId":8,
					  "prodName":"Designer Handbag",
					  "prodPrice":599,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"designerbag.jpg",
					  "visibility":3,
					  "categories": [
					    {"catId":2, "catName":"Women"}
					  ] 
				},{
					   "producId":9,
					  "prodName":"Colorado",
					  "prodPrice":2899,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"Capture9.jpg",
					  "visibility":2,
					  "categories": [
					    {"catId":1, "catName":"Men"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				},{
					   "producId":10,
					  "prodName":"College Cap",
					  "prodPrice":199,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"college-fitted-collectiongroup_grande_8df0e118-6a7f-4e3e-8a67-9b382056ab52_grande.jpg",
					  "visibility":3,
					  "categories": [] 
				},{
					  "producId":11,
					  "prodName":"Designer Formal",
					  "prodPrice":1699,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"designer-formal-shoes-500x500.jpeg",
					  "visibility":1,
					  "categories": [
					    {"catId":1, "catName":"Men"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				},
				{
					  "producId":12,
					  "prodName":"Womens Pumps",
					  "prodPrice":299,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"ladies-fancy-shoe-500x500.jpeg",
					  "visibility":2,
					  "categories": [
					    {"catId":2, "catName":"Women"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				},{
					 "producId":13,
					  "prodName":"Designer Formal (brown)",
					  "prodPrice":1299,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"men-formal-shoes-500x500.jpeg",
					  "visibility":3,
					  "categories": [
					    {"catId":1, "catName":"Men"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				},{
					   "producId":14,
					  "prodName":"Blazer Jacket",
					  "prodPrice":895,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"mens-blazer-jacket-casual-formal-herringbone-pattern-9-colours-4495-blazers.jpg",
					  "visibility":2,
					  "categories": [
					    {"catId":1, "catName":"Men"},
					    {"catId":4, "catName":"Jackets"}
					  ] 
				},{
					   "producId":15,
					  "prodName":"Lace Heels",
					  "prodPrice":899,
					  "prodDesc":"",
					  "prodUrl":"#",
					  "prodImg":"product-image-618704099_1200x1200.jpg",
					  "visibility":2,
					  "categories": [
					    {"catId":2, "catName":"Women"},
					    {"catId":3, "catName":"Shoes"}
					  ] 
				}

			]}

// A function to get all the products
function get_products(productsObj){				

	// Loop through all the products
	for (i in productsObj.products) {

	// Save data in variables
	  var prod_image_url = productsObj.products[i].prodImg;
	  var prod_title = productsObj.products[i].prodName;
	  var prod_price = productsObj.products[i].prodPrice;
	  var prod_url = productsObj.products[i].prodUrl;
	  var prod_id = productsObj.products[i].producId;

	  // Check which products are visible to logged in user
	  if (sessionStorage.getItem("role") >= productsObj.products[i].visibility) {

	  	//Create HTML structrure to generate for each product
	  	var html = "\
	  		<div class='product col-md-3 prod_id_"+prod_id+"'>\
	  		<img src='images/"+prod_image_url+"'>\
	  		<h4 class'product-title'>"+prod_title+"</h4>\
	  		<h3 class'product-rice'>R"+prod_price+"</h3>\
	  		<a class='btn btn-dark' href='"+prod_url+"'>VIEW PRODUCT</a>\
	  		</div>\
	  	";

	  	//Append the product to the container in products.html
	  	jQuery(".products-container").append(html);

	  	
	  	// Loop through the products to get its categories
	  	for (j in productsObj.products[i].categories) {

	  		// Add a class to the product with the category id
	  		// This is used for filtering
		    jQuery(".prod_id_"+prod_id).addClass("catId_"+productsObj.products[i].categories[j].catId);

		 }

	  }


	}





}

// Call the get products function
get_products(productsObj);


// A function for searching products
function search_products(productsObj){				

	// A key up function to make sure the program searches as the user is typing
	jQuery("#search_term").on("keyup", function(e){

	// Prevent default form behavior (just incase)
	e.preventDefault();

	// Get the value of the search input
	var search_term = jQuery("#search_term").val().toLowerCase();

	// A bool to change state if a result is found
	// for validation purposes
	var result_found = false;

	// Remove all products in the container
	// So you can put searched products
	jQuery(".products-container").empty();

		
	// Loop through all the products
	for (i in productsObj.products) {
		var prod_title = productsObj.products[i].prodName.toLowerCase();

		// Check if product title contains any of the typed words
		if (prod_title.includes(search_term)) {

			  var prod_image_url = productsObj.products[i].prodImg;
			  var prod_price = productsObj.products[i].prodPrice;
			  var prod_url = productsObj.products[i].prodUrl;

			 // Check which products are visible to logged in user
			 if (sessionStorage.getItem("role") >= productsObj.products[i].visibility) {

			 	// Create HTML structure.
			  	var html = "\
			  		<div class='product col-md-3'>\
			  		<img src='images/"+prod_image_url+"'>\
			  		<h4 class'product-title'>"+prod_title+"</h4>\
			  		<h3 class'product-rice'>R"+prod_price+"</h3>\
			  		<a class='btn btn-dark' href='"+prod_url+"'>VIEW PRODUCT</a>\
			  		</div>\
			  	";

			  	// Append results to container in products.html
			  	jQuery(".products-container").append(html);

			  	// Change results found state to true
			  	result_found = true;
			}

	  }


	}

	// If the results found state is still false at this point
	// Tell the user nothing is found
	if (!result_found) {
		jQuery(".products-container").html("<p>NO RESULTS FOUND...</p>");
	}

	});

}

// Call the search function
search_products(productsObj);



