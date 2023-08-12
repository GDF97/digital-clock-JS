let dayWeek = document.getElementById("dayWeek");
let hourDisplay = document.getElementById("hour");
let minuteDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let dayNumber = document.getElementById("dayNumber");
let monthString = document.getElementById("monthString");

const clock = () => {
  let daysWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  dayWeek.innerHTML = daysWeek[date.getDay() - 1];
  hourDisplay.innerHTML = date.getHours();
  minuteDisplay.innerHTML = date.getMinutes();
  secondsDisplay.innerHTML = date.getSeconds();
  dayNumber.innerHTML = date.getDate();
  monthString.innerHTML = months[date.getMonth()];
  console.log(date.getMonth());
  console.log(daysWeek[date.getDay() - 1]);

  if (date.getHours() < 10) {
    hourDisplay.innerHTML = "0" + date.getHours();
  }
  if (date.getMinutes() < 10) {
    minuteDisplay.innerHTML = "0" + date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    secondsDisplay.innerHTML = "0" + date.getSeconds();
  }
};

let interval = setInterval(clock, 1000);

// setInterval(1000, clock);
