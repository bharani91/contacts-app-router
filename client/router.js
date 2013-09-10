Meteor.Router.add({
	'/': {
		to: "home",
		and: function() {
			Session.set("currentPage", "home");
		}
	},

	'/pages/about': {
		to: "about",
		and: function() {
			Session.set("currentPage", "about");
		}
	},

	'/pages/terms': {
		to: "terms",
		and: function() {
			Session.set("currentPage", "terms");
		}
	},

	'/login': {
		to: "login",
		and: function() {
			Session.set("currentPage", 'login');
		}
	},

	'/signup': {
		to: "signup",
		and: function() {
			Session.set("currentPage", 'signup');
		}
	},

	'/logout': {
		to: "logout",
		and: function() {
			Meteor.logout(function(error) {
				if(error) {
					alert("Could not logout!")
				} else {
					Meteor.Router.to("/");        
				}

			});
		}
	}

	
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'loading';
		else
			return 'accessDenied';
	},
	'clearNotifications': function(page) {
		clearNotifications();
		return page;
	}
});


Meteor.Router.filter('clearNotifications');
