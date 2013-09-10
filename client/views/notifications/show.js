Template.notifications.notifications = function() {
	return Notifications.find({seen: false});
}

Template.notification.events({
	"click a.close": function(e, t) {
		Notifications.update({
			_id: t.data._id
		}, { $set: {
			seen: true
		}});
	}
})

Template.notification.rendered = function() {
	Meteor.defer(function() {
    	Notifications.update(this._id, {$set: {seen: true}});
  	});
}