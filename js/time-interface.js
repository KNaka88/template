$(document).ready(function(){

  function update() {
    $('#time').text(moment().format("MMMM Do YYYY, H:mm:ss"));
  }
  setInterval(update, 1000);
});
