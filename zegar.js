function count(){
  var today = new Date();
  var hour = today.getHours();
  if (hour<10) hour = "0" + hour;

  var minutes = today.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  var seconds = today.getSeconds();
if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("zegar").innerHTML = hour + ":" + minutes + ":" + seconds;
  setTimeout("count()", 1000);
}
