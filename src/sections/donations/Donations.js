import { useAppAuthContext } from "@contexts/AuthContext";
import React from "react";

const Donations = () => {
  const { user } = useAppAuthContext();
  const { events } = user;

  // const registeredEvents = () => {
  //   return events.map((event) => (event.isRegistered ? event : null));
  // };

  // console.log(registeredEvents());
  return (
    <>
      {events.map((event) => (
        <>
          <div key={event.id}>
            <div>{event.name}</div>
            <div>{event.date}</div>
            <div>{event.location}</div>
          </div>
          <br />
        </>
      ))}
    </>
  );
};

export default Donations;
