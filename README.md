# My To Dos

## HTML

- [X] Make hour divs in HTML for each hour of a 9-5 day<br>
- [X] Confirm all linked APIs are present (day.js, google fonts, bootstrap, etc.)<br>
- [X] Confirm CSS and JS files are linked with HTML<br>


## CSS **LAST**

- [ ] Style elements in page after all other items are completed.

**Notes:**

For this project I'm thinking of a darker theme. Could we possibly put in a light and dark mode slider? 


**COLOR**


![alt text](<Assets/img/Work Scheduler.png>)

![alt text](<Assets/img/second option.png>)







## JS

- [X]  Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run <br>
until the browser has finished rendering all the elements in the html.<br>

- [X] Add a listener for click events on the save button. This code should<br>
use the id in the containing time-block as a key to save the user input in<br>
local storage.<br>

- [X] Add code to apply the past, present, or future class to each time<br>
block by comparing the id to the current hour.<br>

- [X] Add code to get any user input that was saved in localStorage and set<br>
the values of the corresponding textarea elements.<br>

- [X] Add code to display the current date in the header of the page.<br>






## Work Day Scheduler Starter Code

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the Day.js (https://day.js.org/) to an external site. library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality.


## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule <br>
WHEN I open the planner <br>
THEN the current day is displayed at the top of the calendar<br>
WHEN I scroll down<br>
THEN I am presented with time blocks for standard business hours of 9am to 5pm<br>
WHEN I view the time blocks for that day<br>
THEN each time block is color-coded to indicate whether it is in the past, present, or future<br>
WHEN I click into a time block<br>
THEN I can enter an event<br>
WHEN I click the save button for that time block<br>
THEN the text for that event is saved in local storage<br>
WHEN I refresh the page<br>
THEN the saved events persist<br>

![alt text](Assets/img/05-third-party-apis-homework-demo.gif)


