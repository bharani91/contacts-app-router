Regulate('loginForm', [
  
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
  }

]);