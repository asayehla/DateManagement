/**
 * @param {string} start - Date with format "yyyy-mm-dd Time with format "hh:mm"
 * @param {string} end - Date with format "yyyy-mm-dd Time with format "hh:mm"
 */

function elapsedTime(start, end) {
  var elapsed = end.getTime() - start.getTime();

  function timeConversion(millisec) {
    var minutes = millisec / (1000 * 60);
    var hours = millisec / (1000 * 60 * 60);
    var days = millisec / (1000 * 60 * 60 * 24);

    if (minutes < 60) {
      return minutes + " minuter";
    } else if (hours < 24) {
      return hours + " timmar";
    } else {
      return days + " days";
    }
  }
  return timeConversion(elapsed);
}
export default elapsedTime;
