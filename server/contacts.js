Meteor.publish("contacts", function() {
	return Contacts.find({ userId: this.userId });
})