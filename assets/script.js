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

