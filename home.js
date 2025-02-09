  // Get buttons and slider
  const loginBtn = document.getElementById('loginBtn');
  const signUpBtn = document.getElementById('signUpBtn');
  const slider = document.querySelector('.slider');
  const joinUsBtn = document.getElementById('joinUsBtn');
  const alreadyHaveAccountBtn = document.getElementById('alreadyHaveAccountBtn');

  // Initially, the slider covers the Signup form
  slider.classList.add('active-slider', 'move-right');

  // Add event listener to "Join Us!" button (to cover the Login form)
  joinUsBtn.addEventListener('click', function() {
      slider.classList.add('move-left');
      slider.classList.remove('move-right');
  });

  // Add event listener to "Already have an account?" button (to cover the Signup form)
  alreadyHaveAccountBtn.addEventListener('click', function() {
      slider.classList.add('move-right');
      slider.classList.remove('move-left');
  });

  // Optionally, you can add the sliding action when the Login or Sign Up button is clicked
  loginBtn.addEventListener('click', function() {
      slider.classList.add('move-left');
      slider.classList.remove('move-right');
  });

  signUpBtn.addEventListener('click', function() {
      slider.classList.add('move-right');
      slider.classList.remove('move-left');
  });
