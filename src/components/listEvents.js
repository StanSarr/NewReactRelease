import React, { useEffect, useState } from "react";

const ShowNumberOfEvents = ({ number = 0 }) => {
  useEffect(
    () => {
      console.log(
        "called On mount (componentDidMount) and only number is changed"
      );
      return () => console.log("--- componentWillUnmount ---");
    },
    [number]
  );
  return (
    <div>
      Number of events <span>{number}</span>
    </div>
  );
};
export default () => {
  const [numberOfEvents, setNumberOfEvents] = useState(0);
  const [isHidden, setHidden] = useState(false);
  return (
    <div>
      {isHidden && <ShowNumberOfEvents number={numberOfEvents} />}
      <button onClick={() => setNumberOfEvents(events => events + 1)}>
        addEvent
      </button>
      <button onClick={() => setHidden(isHidden => !isHidden)}>Show</button>
    </div>
  );
};
