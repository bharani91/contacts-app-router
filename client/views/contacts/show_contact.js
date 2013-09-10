Template.show_contact.contact = function() {
	return Contacts.findOne(Session.get("currentContact"));
}