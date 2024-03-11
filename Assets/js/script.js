$(document).ready(function () {

  // Current Date formatted with AdvancedFormat extension //

dayjs.extend(dayjs_plugin_advancedFormat);

var currentDayEl = dayjs().format('dddd MMMM Do,YYYY');

$('#currentDay').text(currentDayEl);
var currentTimeEl = dayjs().format('h:mm A')
$('#currentTime').text(currentTimeEl);

// ------------Local Storage and Hour Text-Block Input Variables-----------------------------------//

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

var saveButton9 = document.getElementById('clicksave9');
var saveButton10 = document.getElementById('clicksave10');
var saveButton11 = document.getElementById('clicksave11');
var saveButton12 = document.getElementById('clicksave12');
var saveButton1 = document.getElementById('clicksave1');
var saveButton2 = document.getElementById('clicksave2');
var saveButton3 = document.getElementById('clicksave3');
var saveButton4 = document.getElementById('clicksave4');
var saveButton5 = document.getElementById('clicksave5');
var saveButton6 = document.getElementById('clicksave6');



var storedData9 = JSON.parse(localStorage.getItem('9Key'));
var storedData10 = JSON.parse(localStorage.getItem('10Key'));
var storedData11 = JSON.parse(localStorage.getItem('11Key'));
var storedData12 = JSON.parse(localStorage.getItem('12Key'));
var storedData1 = JSON.parse(localStorage.getItem('1Key'));
var storedData2 = JSON.parse(localStorage.getItem('2Key'));
var storedData3 = JSON.parse(localStorage.getItem('3Key'));
var storedData4 = JSON.parse(localStorage.getItem('4Key'));
var storedData5 = JSON.parse(localStorage.getItem('5Key'));
var storedData6 = JSON.parse(localStorage.getItem('6Key'));

// User Input & Local Storing and Retrieving //

// ---------------------------9--------------------------------------//

if (storedData9) {
  display9.innerHTML = storedData9; 
}
else {
  display9.innerHTML = '';
}

$('#hour-9').find('button').click(function() {
  saveButton9.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton9.setAttribute('class', 'saved');
  }, 1500);

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
  saveButton10.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton10.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour10Text").val());
  
  localStorage.setItem('10Key', JSON.stringify(comment));

});

// ----------------------------11-------------------------------------//

if (storedData11) {
  display11.innerHTML = storedData11; 
}

else {
  display11.innerHTML = '';
}

$('#hour-11').find('button').click(function() {
  saveButton11.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton11.setAttribute('class', 'saved');
  }, 1500);

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
  saveButton12.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton12.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour12Text").val());
  
  localStorage.setItem('12Key', JSON.stringify(comment));

});

// --------------------------1---------------------------------------//

if (storedData1) {
  display1.innerHTML = storedData1; 
}

else {
  display1.innerHTML = '';
}

$('#hour-1').find('button').click(function() {
  saveButton1.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton1.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour1Text").val());
  
  localStorage.setItem('1Key', JSON.stringify(comment));

});

// ---------------------------2--------------------------------------//

if (storedData2) {
  display2.innerHTML = storedData2; 
}

else {
  display2.innerHTML = '';
}

$('#hour-2').find('button').click(function() {
  saveButton2.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton2.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour2Text").val());
  
  localStorage.setItem('2Key', JSON.stringify(comment));

});

// ---------------------------3--------------------------------------//

if (storedData3) {
  display3.innerHTML = storedData3; 
}

else {
  display3.innerHTML = '';
}

$('#hour-3').find('button').click(function() {
  saveButton3.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton3.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour3Text").val());
  
  localStorage.setItem('3Key', JSON.stringify(comment));

});

// ----------------------------4------------------------------------//

if (storedData4) {
  display4.innerHTML = storedData4; 
}

else {
  display4.innerHTML = '';
}

$('#hour-4').find('button').click(function() {
  saveButton4.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton4.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour4Text").val());
  
  localStorage.setItem('4Key', JSON.stringify(comment));

});

// -----------------------------5------------------------------------//

if (storedData5) {
  display5.innerHTML = storedData5; 
}

else {
  display5.innerHTML = '';
}

$('#hour-5').find('button').click(function() {
  saveButton5.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton5.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour5Text").val());
  
  localStorage.setItem('5Key', JSON.stringify(comment));

});

// ------------------------------6-----------------------------------//

if (storedData6) {
  display6.innerHTML = storedData6; 
}

else {
  display6.innerHTML = '';
}

$('#hour-6').find('button').click(function() {
  saveButton6.removeAttribute('class', 'saved');
  setTimeout(function() {
    saveButton6.setAttribute('class', 'saved');
  }, 1500);

  $(this).find('textarea');
  let comment = $.trim($("#hour6Text").val());
  
  localStorage.setItem('6Key', JSON.stringify(comment));

});

// -----------------------Current Time Indicator and Class Manipulator------------------------------------//

currentHour = dayjs().hour();

// --------------------------------9---------------------------------//

let hour9 = document.getElementById("hour-9")

if (currentHour == 9) {

hour9.classList.remove("future")
hour9.classList.remove("past");
hour9.classList.add("present");

}
else if (currentHour > 9) {
  hour9.classList.remove("present")
  hour9.classList.remove("future")
  hour9.classList.add("past")
  display9.classList.add("customPastText")

}
else if (currentHour < 9) {
  hour9.classList.remove("past");
  hour9.classList.remove("present");
  hour9.classList.add("future");
  
}
// -------------------------------10----------------------------------//

let hour10 = document.getElementById("hour-10")

if (currentHour == 10) {

hour10.classList.remove("future")
hour10.classList.remove("past");
hour10.classList.add("present");


}
else if (currentHour > 10) {
hour10.classList.remove("present")
hour10.classList.remove("future")
hour10.classList.add("past")
display10.classList.add("customPastText")
}
else if (currentHour < 10) {
hour10.classList.remove("past");
hour10.classList.remove("present");
hour10.classList.add("future");
}

// --------------------------------11---------------------------------//

let hour11 = document.getElementById("hour-11")

if (currentHour == 11) {

  hour11.classList.remove("future")
  hour11.classList.remove("past");
  hour11.classList.add("present");

}
else if (currentHour > 11) {
  hour11.classList.remove("present")
  hour11.classList.remove("future")
  hour11.classList.add("past")
  display11.classList.add("customPastText")
}
else if (currentHour < 11) {
  hour11.classList.remove("past");
  hour11.classList.remove("present");
  hour11.classList.add("future");
}

// --------------------------------12---------------------------------//

let hour12 = document.getElementById("hour-12")

if (currentHour == 12) {

  hour12.classList.remove("future")
  hour12.classList.remove("past");
  hour12.classList.add("present");

}
else if (currentHour > 12) {
  hour12.classList.remove("present")
  hour12.classList.remove("future")
  hour12.classList.add("past")
  display12.classList.add("customPastText")
}
else if (currentHour < 12) {
  hour12.classList.remove("past");
  hour12.classList.remove("present");
  hour12.classList.add("future");
}

// --------------------------------1---------------------------------//

let hour1 = document.getElementById("hour-1")

if (currentHour == 13) {

  hour1.classList.remove("future")
  hour1.classList.remove("past");
  hour1.classList.add("present");

}
else if (currentHour > 13) {
  hour1.classList.remove("present")
  hour1.classList.remove("future")
  hour1.classList.add("past")
  display1.classList.add("customPastText")
}
else if (currentHour < 13) {
  hour1.classList.remove("past");
  hour1.classList.remove("present");
  hour1.classList.add("future");
}

// --------------------------------2---------------------------------//

let hour2 = document.getElementById("hour-2")

if (currentHour == 14) {

  hour2.classList.remove("future")
  hour2.classList.remove("past");
  hour2.classList.add("present");

}
else if (currentHour > 14) {
  hour2.classList.remove("present")
  hour2.classList.remove("future")
  hour2.classList.add("past")
  display2.classList.add("customPastText")
}
else if (currentHour < 14) {
  hour2.classList.remove("past");
  hour2.classList.remove("present");
  hour2.classList.add("future");
}

// --------------------------------3---------------------------------//

let hour3 = document.getElementById("hour-3")

if (currentHour == 15) {

  hour3.classList.remove("future")
  hour3.classList.remove("past");
  hour3.classList.add("present");

}
else if (currentHour > 15) {
  hour3.classList.remove("present")
  hour3.classList.remove("future")
  hour3.classList.add("past")
  display3.classList.add("customPastText")
}
else if (currentHour < 15) {
  hour3.classList.remove("past");
  hour3.classList.remove("present");
  hour3.classList.add("future");
}

// --------------------------------4---------------------------------//

let hour4 = document.getElementById("hour-4")

if (currentHour == 16) {

  hour4.classList.remove("future")
  hour4.classList.remove("past");
  hour4.classList.add("present");

}
else if (currentHour > 16) {
  hour4.classList.remove("present")
  hour4.classList.remove("future")
  hour4.classList.add("past")
  display4.classList.add("customPastText")
}
else if (currentHour < 16) {
  hour4.classList.remove("past");
  hour4.classList.remove("present");
  hour4.classList.add("future");
}

// --------------------------------5---------------------------------//

let hour5 = document.getElementById("hour-5")

if (currentHour == 17) {

  hour5.classList.remove("future")
  hour5.classList.remove("past");
  hour5.classList.add("present");

}
else if (currentHour > 17) {
  hour5.classList.remove("present")
  hour5.classList.remove("future")
  hour5.classList.add("past")
  display5.classList.add("customPastText")
}
else if (currentHour < 17) {
  hour5.classList.remove("past");
  hour5.classList.remove("present");
  hour5.classList.add("future");
}

// --------------------------------6---------------------------------//

let hour6 = document.getElementById("hour-6")

if (currentHour == 18) {

  hour6.classList.remove("future")
  hour6.classList.remove("past");
  hour6.classList.add("present");

}
else if (currentHour > 18) {
  hour6.classList.remove("present")
  hour6.classList.remove("future")
  hour6.classList.add("past")
  display6.classList.add("customPastText")
}
else if (currentHour < 18) {
  hour6.classList.remove("past");
  hour6.classList.remove("present");
  hour6.classList.add("future");
}

});