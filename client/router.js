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
					alert("Could not logout!");
				} else {
					Meteor.Router.to("/");        
				}

			});
		}
	},

	'/reset-password': {
		to: "recover_email",
		and: function() {
			Session.set("currentPage", 'recover_email');
		}
	},

	'/reset-password/:token': {
		to: "password_update",
		and: function(token) {
			Session.set("resetPasswordToken", token);
			Session.set("currentPage", 'password_update');
		}
	},


	'/add-contact': {
		to: 'add_contact',
		and: function() {
			Session.set("currentPage", "add_contact");
		}
	},

	'/contacts': {
		to: "contact_list",
		and: function() {
			Session.set("currentPage", "contact_list");
		}
	},

	'/contacts/:id': {
		to: "show_contact",
		and: function(id) {
			Session.set("currentContact", id);
			Session.set("currentPage", "show_contact");
		}
	},

	'/contacts/:id/edit': {
		to: "edit_contact",
		and: function(id) {
			Session.set("currentContact", id);
			Session.set("currentPage", "edit_contact");
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
			return 'access_denied';
	},
	'redirectToContacts': function(page) {
		if (Meteor.user()) {
			Session.set("currentPage", "contact_list");
			return 'contact_list'
		} else {
			return page
		}
	},
	'clearNotifications': function(page) {
		clearNotifications();
		return page;
	}
});


Meteor.Router.filter('clearNotifications');
Meteor.Router.filter('redirectToContacts', { only: ['home']});
Meteor.Router.filter('requireLogin', { only: ['add_contact', 'contact_list', 'edit_contact', 'show_contact'] });
