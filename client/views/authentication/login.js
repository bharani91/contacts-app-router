Meteor.startup(function () {
	Regulate.loginForm.onSubmit(function (error, data) {
		if (error) {
			console.log('Validation failed. These are the errors: ', error);
		} else {
			var user = getFormData(data);

			Meteor.loginWithPassword(user.username, user.password, function (error){
				if (error) {
					showNotification(error.reason, "error", "Could Not Login.");
				} else {
					Meteor.Router.to("/");
					showNotification("Welcome back to Contacts App", "success", "Login Successful");
				}
			});
		}
	});
});
