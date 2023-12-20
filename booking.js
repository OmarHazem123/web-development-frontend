document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate form fields
      const fromInput = document.getElementById("from");
      const toInput = document.getElementById("to");
      const dateInput = document.getElementById("date");

      if (!isValidInput(fromInput.value)) {
        alert('Please enter a valid "From" location.');
        return;
      }

      if (!isValidInput(toInput.value)) {
        alert('Please enter a valid "To" location.');
        return;
      }

      if (!isValidInput(dateInput.value)) {
        alert("Please select a valid departure date.");
        return;
      }

      // If all validations pass, you can proceed with further actions,
      // such as submitting the form or making an AJAX request.

      alert("Form submitted successfully!");
      // bookingForm.submit(); // Uncomment this line to submit the form programmatically
    });
  }

  function isValidInput(value) {
    // Add your custom validation logic here
    return value.trim() !== "";
  }
});
