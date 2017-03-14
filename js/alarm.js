function Alarm(currentTime) {
  this.currentTime = currentTime;
}

Alarm.prototype.setAlarm = function(setTime){
  return "Set Time";
};

exports.alarmModule = Alarm;
