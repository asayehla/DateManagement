function splitIntoTimeCards(eventList) {
  var listToReturn = [];

  //filter out events that stretches over two or more days
  var eventsNotOnSameDay = eventList.filter(
    (eventList) =>
      new Date(eventList.endDate).getDate() !==
      new Date(eventList.startDate).getDate()
  );
  
  //the values we dont need to split
  var eventsOnSameDay = eventList.filter(
    (eventList) =>
      new Date(eventList.endDate).getDate() ===
      new Date(eventList.startDate).getDate()
  );

  //For each event that are on more than one day, split them into two
  eventsNotOnSameDay.forEach((event) => {
    let splitData = splitEvent(event);
    splitData.forEach((obj) => listToReturn.push(obj));
  });

  eventsOnSameDay.forEach((event) =>
    listToReturn.push(event)
  );

  //sort list after id
  listToReturn.sort(function (a, b) {
    return a.id - b.id;
  });

  return listToReturn;
}

function splitEvent(event) {
  let listToReturn = [];
  let setEndDate = new Date(event.startDate).setUTCHours(24, 0);
  let endDateISO = new Date(setEndDate).toISOString();
  let endDateString = endDateISO.slice(0, 10) + " " + endDateISO.slice(11, 16);

  let setStartDate = new Date(event.startDate).setUTCHours(24, 0);
  let startDateISO = new Date(setStartDate).toISOString();
  let startDateString =
    startDateISO.slice(0, 10) + " " + startDateISO.slice(11, 16);

  var firstEntity = {
    externalId: event._id,
    id: event.id,
    activity: event.activity,
    startDate: event.startDate,
    endDate: endDateString,
    location: event.location,
  };
  var secondEntity = {
    externalId: event._id,
    id: event.id,
    activity: event.activity,
    startDate: startDateString,
    endDate: event.endDate,
    location: event.location,
  };

  listToReturn.push(firstEntity);
  listToReturn.push(secondEntity);

  return listToReturn;
}

export default splitIntoTimeCards;
