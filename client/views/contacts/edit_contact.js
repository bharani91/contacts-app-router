Template.edit_contact.contact = function() {
    return Contacts.findOne({ _id: Session.get("currentContact") });
}


Meteor.startup(function () {
    Regulate.editContactForm.onSubmit(function (error, data) {
        if (error) {
            showNotification("There were some errors while submitting this form. Please check your information", "error", "Could Not Update Contact");
        } else {
            var contact = getFormData(data);

            Contacts.update(Session.get("currentContact"), { $set: {
                name: contact['name'],
                email: contact.email,
                phone: contact.phone,
                twitter: contact.twitter,
                userId: Meteor.userId()
            }}, function(err) {
                if(err) {
                    showNotification("Please try submitting again.", "error", "Could not save contact!");
                } else {
                    showNotification("Updated Contact", "success", "Success!");
                    Meteor.Router.to("/contacts/" + Session.get("currentContact"));

                }
            });

        }
    });
});