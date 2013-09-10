Meteor.startup(function () {
	Regulate.passwordUpdateForm.onSubmit(function (error, data) {
		if (error) {
			console.log(error);
			showNotification("Please ensure that your passwords match and are more than 6 characters.", "error", "Could Not Update Password");
		} else {
			var user = getFormData(data);
			console.log(user);


			Accounts.resetPassword(Session.get('resetPasswordToken'), user.password, function(error){
				if (error) {
					showNotification(error.reason, "error", "Could Not Update Password!");
				} else {
					showNotification("Your password has been updated successfully", "success", "Update Successful!");
					Meteor.Router.to("/login");
				}
			});

		}
	});
});
