
//An object with all the categories 
categoriesObj = {"categories":[
				{
					  "categoryId":1,
					  "categoryName":"Men",
					  "categoryDesc":"Shoes made of crocodile skin",
					  "catUrl":"#",
					  "visibility":1,
					  "subcategories":[
					    {"subId":3, "subName":"Shoes"},
					    {"subId":4,  "subName":"Jackets"}
					  ] 
				},
				{
					 "categoryId":2,
					  "categoryName":"Women",
					  "categoryDesc":"Shoes made of crocodile skin",
					  "catUrl":"#",
					  "visibility":2,
					  "subcategories":[
					    {"subId":3, "subName":"Shoes"},
					  ] 
				},
				{
					 "categoryId":3,
					  "categoryName":"Shoes",
					  "categoryDesc":"Shoes made of crocodile skin",
					  "catUrl":"#",
					  "visibility":3,
					 "subcategories":[] 
				},
				{
					 "categoryId":4,
					  "categoryName":"Jackets",
					  "categoryDesc":"Shoes made of crocodile skin",
					  "catUrl":"#",
					  "visibility":2,
					  "subcategories":[] 
				}

			]}


function get_categories(categoriesObj){				

	// Loop through all the categories
	for (i in categoriesObj.categories) {

	var cat_id = categoriesObj.categories[i].categoryId;
	var cat_url = categoriesObj.categories[i].catUrl;
	var cat_name = categoriesObj.categories[i].categoryName;

	// Count subcategories
	var num_subcat = categoriesObj.categories[i].subcategories.length;

	// Check which Categories are visible to logged in user
	if (sessionStorage.getItem("role") >= categoriesObj.categories[i].visibility) {

	 //Check it has subcategories 
	if(num_subcat == 0){
	  jQuery(".nav-links-ul").append('\
		  <li class="nav-item">\
	        <a class="nav-link" data-category="catId_'+cat_id+'" href="'+cat_url+'">'+cat_name+'</a>\
	      </li>\
	  	');
	}else{

		jQuery(".nav-links-ul").append('\
		  <li class="nav-item dropdown">\
			 <a class="nav-link dropdown-toggle" data-category="catId_'+cat_id+'" href="'+cat_url+'" id="dropdown_'+cat_id+'" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
	          '+cat_name+'\
	        </a>\
        	<div class="dropdown-menu menu_'+cat_id+'" aria-labelledby="dropdown_'+cat_id+'"></div>\
	      </li>\
	  	');
	}
	  

	  // // Loop through sub categories 
		for (j in categoriesObj.categories[i].subcategories) {

			var subcat_id = categoriesObj.categories[i].subcategories[j].subId;
			var subcat_name = categoriesObj.categories[i].subcategories[j].subName;

			// Create the HTML for the dropdown
			var dropdown_html = '<a class="dropdown-item" data-parent="catId_'+cat_id+'" data-category="catId_'+subcat_id+'" href="'+cat_url+'">'+subcat_name+'</a>';

			// Append the dropdown to the parent on navbar
			jQuery(".menu_"+cat_id+"").append(dropdown_html);
		  }

	}

	}

}

// Call the function so it runs
get_categories(categoriesObj);