Notifications = new Meteor.Collection(null);

showNotification = function(message, type, heading) {
  Notifications.insert({message: message, type: type, heading: heading, seen: false})
}
clearNotifications = function() {
  Notifications.remove({seen: true});
}