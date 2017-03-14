function Alarm(currentTime) {
  this.currentTime = currentTime;
}


exports.alarmModule = Alarm;


Alarm.prototype.checkAlarm = function(alarm_time){
  var checkAlarm = moment().subtract(alarm_time, 'minutes');
  console.log(checkAlarm);
  if(checkAlarm < 0){
    return "Alarm!";
  }else {
    return "Not Alarm";
  }
};
