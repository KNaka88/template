var Alarm = require('./../js/alarm.js').alarmModule;

$(function(){
  $("#alarm_time_form").submit(function(e){
    e.preventDefault();

    $("#timer").text("");
    var alarm_time = parseInt($("#alarm_time").val());
    console.log(alarm_time);

    var currentTime= new Alarm(moment().format("MMMM Do YYYY, H:mm")); //get current
    // console.log(currentTime.checkAlarm(alarm_time));

    var timer = moment.duration(alarm_time, "seconds").timer({
      loop: false
    }, function() {
      // console.log(timer.getDuration());
      $("#timer").text("Time is UP!!");
    });

  });
});
