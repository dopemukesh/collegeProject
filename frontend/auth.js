// Signup Function
async function signup(event) {
  event.preventDefault();
  const username = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });

  const data = await res.json();
  // Success or Error Toast
  if (res.ok) {
    showToast(data.message, 'success'); // Show success if signup is successful
  } else {
    showToast(data.message, 'error');   // Show error if signup fails
  }
}

// Login Function
async function login(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    window.location.href = 'homePage.html';
    showToast(data.message, 'success');
  } else {
    // Error Toast
    showToast(data.message, 'error');
  }
}
