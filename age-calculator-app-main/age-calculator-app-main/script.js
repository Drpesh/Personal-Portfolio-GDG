
function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (day && month && year) {
      let dobDate = new Date(year, month - 1, day);
      let currentDate = new Date();

      let ageInMilliseconds = currentDate - dobDate;
      let ageDate = new Date(ageInMilliseconds);
      let years = ageDate.getUTCFullYear() - 1970;
      let months = ageDate.getUTCMonth();
      let days = ageDate.getUTCDate() - 1; 

      document.getElementById("yearOutput").innerText = years;
      document.getElementById("monthOutput").innerText = months;
      document.getElementById("dayOutput").innerText = days;}
   else if (year > currentDate || month > ageDate.getUTCMonth() || day > ageDate.getUTCDate() - 1) {
    document.getElementById("message3").innerText = "Must be in the past.";
    document.getElementById("yearText").style.color = "hsl(0, 100%, 67%)";
  
    document.getElementById("message2").innerText = "Must be a valid month.";
    document.getElementById("monthText").style.color = "hsl(0, 100%, 67%)";
  
    document.getElementById("message1").innerText = "Must be a valid date.";
    document.getElementById("dayText").style.color = "hsl(0, 100%, 67%)";
    return false;
  } else {
      document.getElementById("message1").innerText = "This field is required.";
      document.getElementById("message2").innerText = "This field is required.";
      document.getElementById("message3").innerText = "This field is required.";
      document.getElementById("dayText").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("monthText").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("yearText").style.color = "hsl(0, 100%, 67%)";
  }
}
