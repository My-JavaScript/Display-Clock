  // Keep track of the current format (default is 24-hour)
  let is24HourFormat = true;

  // Function to update the clock every second
  function updateClock() {
      // Get the current time
      const now = new Date();
      let hours = now.getHours(); // Get hours (0-23)
      let minutes = now.getMinutes(); // Get minutes (0-59)
      let seconds = now.getSeconds(); // Get seconds (0-59)
      let ampm = ""; // Variable for AM/PM in 12-hour format

      // Check the format and convert to 12-hour if necessary
      if (!is24HourFormat) {
          ampm = hours >= 12 ? "PM" : "AM"; // Set AM or PM
          hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
      }

      // Add leading zeros to hours, minutes, and seconds
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Combine the time string
      const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`.trim();

      // Update the clock display
      document.getElementById("clock").textContent = currentTime;
  }

  // Function to toggle between 12-hour and 24-hour formats
  function toggleFormat() {
      is24HourFormat = !is24HourFormat; // Switch the format
      const toggleBtn = document.getElementById("toggleBtn");

      // Update the button text based on the current format
      toggleBtn.textContent = is24HourFormat ?
          "Switch to 12-Hour Format" :
          "Switch to 24-Hour Format";

      // Update the clock immediately after switching
      updateClock();
  }

  // Add a click event listener to the toggle button
  document.getElementById("toggleBtn").addEventListener("click", toggleFormat);

  // Call the updateClock function immediately to display the time
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);