// Switch Form Function
function switchForm(formType = 'login') {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabs = document.querySelectorAll('.tab');

  if (formType === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
  } else {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
  }
}

// Signup Function
async function signup(event) {
  event.preventDefault();

  // Collect form data
  const username = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    // Success or Error Toast
    if (res.ok) {
      showToast(data.message, 'success'); // Show success toast
      switchForm('login'); // Switch to login tab after successful signup
    } else {
      showToast(data.message, 'error'); // Show error toast
    }
  } catch (error) {
    console.error("Error during signup:", error);
    showToast("Something went wrong! Please try again.", 'error');
  }
}

// Login Function
async function login(event) {
  event.preventDefault();

  // Collect form data
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      showToast(data.message, 'success');
      setTimeout(() => {
        window.location.href = './src/homePage.html'; // Redirect after success
      }, 2000); // Delay to show the toast before redirect
    } else {
      showToast(data.message, 'error'); // Show error toast
    }
  } catch (error) {
    console.error("Error during login:", error);
    showToast("Something went wrong! Please try again.", 'error');
  }
}
