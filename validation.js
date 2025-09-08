function validateRegistration() {
  
  let fname = document.getElementById("fname").value.trim();
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let address = document.getElementById("address").value.trim();
  let street = document.getElementById("street").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let pin = document.getElementById("pin").value.trim();
  let country = document.getElementById("country").value.trim();
  let qualification = document.getElementById("qualification").value;
  let course = document.getElementById("course").value.trim();
  let university = document.getElementById("university").value.trim();
  let location = document.getElementById("location").value.trim();
  let year = document.getElementById("year").value.trim();
  let accountName = document.getElementById("account-name").value.trim();
  let accountNumber = document.getElementById("account-number").value.trim();
  let ifsc = document.getElementById("ifsc-code").value.trim();
  let bankName = document.getElementById("bank-name").value.trim();
  let branchName = document.getElementById("branch-name").value.trim();

  // First Name
  if (fname === "") {
    alert("First Name is required");
    return false;
  }

  // DOB
  if (dob === "") {
    alert("Date of Birth is required");
    return false;
  }

  // Email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid Email (example: abc@gmail.com)");
    return false;
  }

  // Phone (10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits");
    return false;
  }

  // Address details
  if (address === "" || street === "" || city === "" || state === "" || pin === "" || country === "") {
    alert("All Address fields are required");
    return false;
  }

  // Pin code (6 digits)
  let pinPattern = /^[0-9]{6}$/;
  if (!pinPattern.test(pin)) {
    alert("Pin Code must be 6 digits");
    return false;
  }

  // Education
  if (qualification === "") {
    alert("Please select your Qualification");
    return false;
  }
  if (course === "" || university === "" || location === "") {
    alert("All Education details are required");
    return false;
  }

  let currentYear = new Date().getFullYear();
  if (year < 1950 || year > currentYear) {
    alert("Please enter a valid Year of Graduation");
    return false;
  }

  // Bank details
  if (accountName === "" || bankName === "" || branchName === "") {
    alert("Bank details cannot be empty");
    return false;
  }

  let accountPattern = /^[0-9]{9,18}$/;
  if (!accountPattern.test(accountNumber)) {
    alert("Account Number must be between 9 and 18 digits");
    return false;
  }

  let ifscPattern = /^[A-Z]{4}0[0-9]{6}$/;
  if (!ifscPattern.test(ifsc)) {
    alert("Please enter a valid IFSC Code (e.g., SBIN0001234)");
    return false;
  }

  // ✅ If all checks passed
  alert("Form submitted successfully!");
  return true; // allow form to submit
}
