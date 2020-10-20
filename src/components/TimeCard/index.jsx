import React from "react";

import { StyledTimeCard } from "./style";
import elapsedTime from "../../helpers/elapsedTime";

const TimeCard = (props) => {
  var event = props.event;
  var dateObjectStart = new Date(event.startDate);
  var dateObjectEnd = new Date(event.endDate);
  var startTimeString = getTimeString(dateObjectStart);
  var endTimeString = getTimeString(dateObjectEnd);
  var elapsed = elapsedTime(dateObjectStart, dateObjectEnd);
  var startday = dateObjectStart.getDate();

  function getTimeString(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var hoursText = hours > 9 ? hours : '0' + hours;
    var minutesText = minutes > 9 ? minutes : '0' + minutes;
    return hoursText + ':' + minutesText;
  }

  return (
    <StyledTimeCard>
      <div className="text-box">
        <div>
          <h3>Aktivitet</h3>
          <p>{event.activity}</p>
        </div>
        <div>
          <h3>Plats</h3>
          <p>{event.location}</p>
        </div>
        <div>
          <h3>Start dag</h3>
          <p>{startday}</p>
        </div>
        <div>
          <h3>Hur länge</h3>
          <p>{elapsed}</p>
        </div>
        <div>
          <h3>Start tid</h3>
          <p>{startTimeString}</p>
        </div>
        <div>
          <h3>Slut tid</h3>
          <p>{endTimeString}</p>
        </div>
      </div>
    </StyledTimeCard>
  );
};

export default TimeCard;
