// ✅Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {


  
  // TODO: Add a ✅listener for ✅click events on the ✅save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  
  //How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





  //
  // ✅TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // ✅TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // ✅TODO: Add code to display the current date in the header of the page.
});

// ------------TEMPLATE for local storage hour 9 - use this for all other hours. This stores and pulls the inputs in-----------------------------------//


var display9 = document.getElementById('hour9Text');
var display10 = document.getElementById('hour10Text');
var display11 = document.getElementById('hour11Text');
var display12 = document.getElementById('hour12Text');
var display1 = document.getElementById('hour1Text');
var display2 = document.getElementById('hour2Text');
var display3 = document.getElementById('hour3Text');
var display4 = document.getElementById('hour4Text');
var display5 = document.getElementById('hour5Text');
var display6 = document.getElementById('hour6Text');

var storedData9 = JSON.parse(localStorage.getItem('9Key'));
var storedData10 = JSON.parse(localStorage.getItem('10Key'));
var storedData11 = JSON.parse(localStorage.getItem('11Key'));
var storedData12 = JSON.parse(localStorage.getItem('12Key'));
var storedData13 = JSON.parse(localStorage.getItem('13Key'));
var storedData14 = JSON.parse(localStorage.getItem('14Key'));
var storedData15 = JSON.parse(localStorage.getItem('15Key'));
var storedData16 = JSON.parse(localStorage.getItem('16Key'));
var storedData17 = JSON.parse(localStorage.getItem('17Key'));
var storedData18 = JSON.parse(localStorage.getItem('18Key'));


if (storedData9) {
  display9.innerHTML = storedData9; 
}
else {
  display9.innerHTML = '';
}

$('#hour-9').find('button').click(function() {
  $(this).find('textarea');
  let comment = $.trim($("#hour9Text").val());
  
  localStorage.setItem('9Key', JSON.stringify(comment));
  
});

// ---------------------------10--------------------------------------//


if (storedData10) {
  display10.innerHTML = storedData10; 
}

else {
  display10.innerHTML = '';
}

$('#hour-10').find('button').click(function() {
  $(this).find('textarea');
  let comment = $.trim($("#hour10Text").val());
  
  localStorage.setItem('10Key', JSON.stringify(comment));

});

// --------------------------------11---------------------------------//

if (storedData11) {
  display11.innerHTML = storedData11; 
}

else {
  display11.innerHTML = '';
}

$('#hour-11').find('button').click(function() {
  $(this).find('textarea');
  let comment = $.trim($("#hour11Text").val());
  
  localStorage.setItem('11Key', JSON.stringify(comment));

});
// ----------------------------12-------------------------------------//
if (storedData12) {
  display12.innerHTML = storedData12; 
}

else {
  display12.innerHTML = '';
}

$('#hour-12').find('button').click(function() {
  $(this).find('textarea');
  let comment = $.trim($("#hour12Text").val());
  
  localStorage.setItem('12Key', JSON.stringify(comment));

});

// --------------------------1---------------------------------------//


// ---------------------------2--------------------------------------//


// ---------------------------3--------------------------------------//


// ----------------------------4------------------------------------//


// -----------------------------5------------------------------------//


// ------------------------------6-----------------------------------//


// -----------------------------------------------------------------//


// -----------------------------------------------------------------//











// Current Date formatted with AdvancedFormat extension //

dayjs.extend(dayjs_plugin_advancedFormat);

var currentDayEl = dayjs().format('dddd MMMM Do,YYYY');
$('#currentDay').text(currentDayEl);

// -----------------------------------------------------------------//

// -----------------------Current Time Indicator and class changer------------------------------------//


currentHour = dayjs().hour();
let hour9 = document.getElementById("hour-9")

if (currentHour == 9) {
  dayjs().hour()
currentHour = dayjs().hour();

hour9.classList.add("present");
}
else(currentHour > 9)

hour9.classList.add("past");

// -----------------------------------------------------------------//
