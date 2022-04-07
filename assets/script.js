//need to add the current day MM:DD:YYYY to the top of the planner
 var currentDay = moment().format('MMM Do YYYY,h:mm:ss a');
//need to now link the currentDay variable to my HTML
$("#currentDay").html(currentDay);


//need a save button click listeneer and store text in local storage
//using the jQuery $document.ready on the save button to show when the text area 
//is ready it will get the values of the text and save  to local storage
$(document).ready(function(){

    //save button functionality
    $(".saveBtn").on("click",function(){
        //getting the text area value
        var textArea = $(this).siblings(".text").val();
        //getting the time value 
        var time = $(this).parent().attr("id");

        //save these values to local storage
        localStorage.setItem(time,textArea);
    })
})

//need the current hour, will go from 9-16
//need to give if it's the past/present/future

function hoursTime(){
    var currentHour = moment().hours();

    //will need to do a jquery loop to go through each time block and 
    //give the appropriate color per element
    $(".time-block").each(function(){
        var timeBlockElement = parseInt($(this).attr("id"));

        //adding color for future
        if(timeBlockElement > currentHour){
            $(this).addClass("future");
        }
        //adding color for present
        else if(timeBlockElement === currentHour){
            $(this).addClass("present");
        }
        //adding color for past
        else if(timeBlockElement < currentHour){
            $(this).addClass("past");
        }
    })
}

//need to load each saved item per hour through jquery
$("9 .text").val(localStorage.getItem("9"));
$("10 .text").val(localStorage.getItem("10"));
$("11 .text").val(localStorage.getItem("11"));
$("12 .text").val(localStorage.getItem("12"));
$("13 .text").val(localStorage.getItem("13"));
$("14 .text").val(localStorage.getItem("14"));
$("15 .text").val(localStorage.getItem("15"));
$("16 .text").val(localStorage.getItem("16"));

hoursTime();