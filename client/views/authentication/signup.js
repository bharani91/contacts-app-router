Meteor.startup(function () {
	Regulate.signupForm.onSubmit(function (error, data) {
		if (error) {
			showNotification("There were some errors while submitting this form. Please check your information", "error", "Could Not Create Account");
		} else {
			var user = getFormData(data);
		
			Accounts.createUser({
				username: user.username, 
				password: user.password, 
				email: user.email, 
				profile: {
					firstName: user.firstName, 
					lastName: user.lastName
				}
			}, function(error) {
				if (error) {
					showNotification(error.reason, "error", "Your account Could not be created");
				} else {
					showNotification("Welcome to Contacts Manager application", "success", "Signup successful!");
					Meteor.Router.to("/");
				}
			});

		}
	});
});
