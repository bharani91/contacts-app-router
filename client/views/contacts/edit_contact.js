Template.edit_contact.contact = function() {
    return Contacts.findOne({ _id: Session.get("currentContact") });
}


Template.edit_contact.events({
    "submit form": function(e, t) {

        e.preventDefault();
        var name = t.find(".name"),
        phone = t.find(".phone"),
        email = t.find(".email"),
        twitter = t.find(".twitter"),
        form = t.find("form"); 


        if(!name.value.length || !email.value.length) {
            alert("Please enter a valid name and email address.");
            return false;
        }

        Contacts.update(Session.get("currentContact"), { $set: {
            name: name.value,
            email: email.value,
            phone: phone.value,
            twitter: twitter.value,
            userId: Meteor.userId()
        }}, function(err) {
            if(err) {
                showNotification("Please try submitting again.", "error", "Could not save contact!");
            } else {
                showNotification("Updated Contact Details", "success", "Success!");
                form.reset();

                Meteor.Router.to("/contacts/" + Session.get("currentContact"));

            }
        });




    }
});