var Alarm = require('./../js/alarm.js').alarmModule;

$(function(){
  $("#alarm_time_form").click(function(e){
    e.preventDefault();
    var alarm_time = $("#alarm_time").val();
    var alarm = new Alarm("10:00"); //get current time from Moment.js
    var setTime = alarm.setAlarm(alarm_time)//set alarmtime
    console.log(setTime); 
  });
});
