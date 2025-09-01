// Select form
const form = document.getElementById("appForm");

// Form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop auto refresh

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let dob = document.getElementById("dob").value;
  let education = document.getElementById("education").value;
  let terms = document.getElementById("terms").checked;

  // Validation
  if (name.length < 3) {
    alert("Name must be at least 3 characters!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  if (dob === "") {
    alert("Please select Date of Birth!");
    return;
  }

  if (education === "") {
    alert("Please select Education!");
    return;
  }

  if (!terms) {
    alert("You must agree to the terms!");
    return;
  }

  // Success
  alert("Form submitted successfully! 🎉");

  // Reset form
  form.reset();
});
