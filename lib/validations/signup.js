Regulate('signupForm', [
  
  {
    name: 'username',
    min_length: 3,
    max_length: 25,
    display_as: 'Username',
    display_error: '#username-error'
  }, {
    name: 'password',
    min_length: 6,
    max_length: 50,
    display_as: 'Password',
    display_error: '#password-error'
  },
  {
    name: 'password_again',
    match_field: 'password',
    display_as: 'Confirmation',
    display_error: '#password-error'
  },
  {
    name: 'email',
    email: true,
    display_as: 'Email',
    display_error: '#email-error'
  },
  {
    name: 'firstName',
    min_length: 3,
    max_length: 25,
    display_as: 'First Name',
    display_error: '#name-error'
  },
  {
    name: 'lastName',
    min_length: 3,
    max_length: 25,
    display_as: 'Last Name',
    display_error: '#name-error'
  },

]);