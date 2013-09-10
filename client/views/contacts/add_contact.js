Meteor.startup(function () {
    Regulate.addContactForm.onSubmit(function (error, data) {
        if (error) {
            showNotification("There were some errors while submitting this form. Please check your information", "error", "Could Not Add Contact");
        } else {
            var contact = getFormData(data);

            Contacts.insert({
                name: contact['name'],
                email: contact.email,
                phone: contact.phone,
                twitter: contact.twitter,
                userId: Meteor.userId()
            }, function(err, result) {
                if(err) {
                    showNotification("Please try submitting again.", "error", "Could not save contact!");
                } else {
                    showNotification("Added New Contact", "success", "Success!");
                    Meteor.Router.to("/contacts/" + result);

                }
            });

        }
    });
});
