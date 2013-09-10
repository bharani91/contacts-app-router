Regulate('passwordUpdateForm', [
  
  {
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
    display_error: '#password-again-error'
  }

]);