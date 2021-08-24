import React from "react";
import Cards from "../components/Card";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a Second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetup() {
  return (
    <section>
      <h1>All meet up</h1>

      {DUMMY_DATA.map((meet_up) => {
        return <Cards title={meet_up.title} content={meet_up.description} image={meet_up.image} />;
      })}
    </section>
  );
}

export default AllMeetup;
