// A function that checks if a user is logged in
function check_login_session(){
	// Check if the user has logged in before they can view this page
	if (sessionStorage.length == 0 || sessionStorage.getItem("username") == "null") {
		// if user is not logged in, redirect to login page
		window.location.href = "index.html";
	}else{

		// If user is logged in, create a session
		var username = sessionStorage.getItem("username");
		var role = sessionStorage.getItem("role");

		var role_title = "";

		// appded username to greeting message on products page
		jQuery(".username").text(username);

		// Create user role badge
		// To identify if the user is an admin, customer or casual user
		if (role == 3) {
			role_title = "Admin";
			jQuery(".role-title").addClass("badge-primary");
		}else if(role == 2){
			role_title = "Customer";
			jQuery(".role-title").addClass("badge-warning");
		}else if(role == 1){
			role_title = "Casual user";
			jQuery(".role-title").addClass("badge-light");
		}else{

		}


		jQuery(".role-title").text(role_title);


	}
}


//An object with all the products 
usersObj = {"users":[
				{
				  "userId":1,
				  "username":"Moeta",
				  "useremail":"moueta@email.com",
				  "userpass":"@Moeta123",
				  "role":1
				},
				{
				  "userId":2,
				  "username":"admin",
				  "useremail":"admin@email.com",
				  "userpass":"@admin123",
				  "role":3
				},
				{
				  "userId":2,
				  "username":"customer",
				  "useremail":"customer@email.com",
				  "userpass":"@customer123",
				  "role":2
				},
				{
				  "userId":4,
				  "username":"customer2",
				  "useremail":"customer2@email.com",
				  "userpass":"@customer2",
				  "role":1
				}

			]}

// A function to get all the users
// Not really used in this program
function get_users(usersObj){				

	// Loop through all the products
	for (i in usersObj.users) {

	  console.log(usersObj.users[i].username);


	}

}



// A function to login a user
function login_user(usersObj, username, pass)
{
	var user_found = false;

	// Loop through all the products
	for (i in usersObj.users) {

		// Check if username and password match
		if (username == usersObj.users[i].username && pass == usersObj.users[i].userpass) {

			// Set the user role 
			var userrole = usersObj.users[i].role;
			var user_found = true;
		}

		// If user is not found clear the session
		//just incase
		if (!user_found) {
			sessionStorage.clear();
		}
	}

	// If username and password is correct, create session and redirect to products page
	if (user_found) {
		// alert("Logged in");
		sessionStorage.setItem("username", username);
		sessionStorage.setItem("role", userrole);

		get_products(productsObj);

		window.location.href = "products.html";

	}else{
		alert("Login details Incorrect");
	}

}

// A function to logout a user by destroying the session
function logout_user()
{	
	sessionStorage.clear();
	window.location.href = "index.html";
}
