var contact_rules =  [
  
  {
    name: 'name',
    min_length: 5,
    max_length: 50,
    display_as: 'Name',
    display_error: '#name-error'
  },

  {
    name: 'email',
    email: true,
    display_as: 'Email',
    display_error: '#email-error'
  },
  {
    name: 'phone',
    min_length: 3,
    max_length: 25,
    numeric: true,
    display_as: 'Phone Number',
    display_error: '#phone-error'
  }
  
]


Regulate('addContactForm', contact_rules);
Regulate('editContactForm', contact_rules);