// login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // You would validate the login here, for now, we'll just redirect
  window.location.href = '/report.html'; // The report page after successful login
});
