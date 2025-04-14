(function () {
  // Dynamically adding CSS to the head
  const style = document.createElement('style');
  style.innerHTML = `
    .toast {
      position: fixed;
      top: 30px;
      right: 30px;
      // transform: translateX(-50%);
      padding: 12px 24px;
      font-size: 14px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1s ease;
      z-index: 9999999999;
      background-color: #fff; /* Default background color */
      display: none; /* Initially hidden */
    }

    .toast.show {
      opacity: 1;
      pointer-events: auto;
      display: block; /* Show when active */
    }

    .toast.success {
      border-left:6px solid #4caf50; /* Green */
    }

    .toast.error {
      border-left:6px solid #f44336; /* Red */
    }

    .toast.info {
      border-left:6px solid #2196f3; /* Blue */
    }
  `;
  document.head.appendChild(style);

  // Create the toast element
  const toast = document.createElement('div');
  toast.id = 'toast';
  document.body.appendChild(toast);

  // Function to show toast with different types
  function showToast(message, type = 'info', duration = 5000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type}`; // Adding the type (success/error/info)
    toast.classList.add('show'); // Show the toast

    // Hide the toast after the specified duration
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // Exposing the showToast function globally
  window.showToast = showToast;
})();
