Meteor.startup(function () {
	Regulate.recoverEmailForm.onSubmit(function (error, data) {
		if (error) {
			showNotification("There were some errors while submitting this form. Please check your information", "error", "Could Not Send Email");
		} else {
			var user = getFormData(data);
			Accounts.forgotPassword({ email: user.email }, function(error){
				if (error) {
					showNotification(error.reason, "error", "Could Not Send Email!");
				} else {
					showNotification("Check your email for instructions to reset your password", "success", "Email sent!");
					Meteor.Router.to("/login");
				}
			});

		}
	});
});
