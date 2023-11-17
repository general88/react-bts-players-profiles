import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Picture from "./Picture";
import JerseyNumber from "./JerseyNumber";
import Name from "./Name";
import Age from "./Age";
import Club from "./Club";
import Nationality from "./Nationality";
import { Card } from "react-bootstrap";

export default function PlayerCard({
  id,
  name,
  jerseyNumber,
  age,
  club,
  nationality,
  image,
}) {
  return (
    // <Card
    //   style={{
    //     width: "58rem",
    //     backgroundColor: "#a3cef1",
    //     display: "flex",
    //   }}
    // >
    <div
      className="d-flex gap-3"
      style={{
        width: "45rem",
        backgroundColor: "#a3cef1",
        display: "flex",
        height: "400px",
        margin:"auto"
      }}
    >
      <Picture image={image} />
      <Card.Body style={{ padding: "60px 0 10px 0" }}>
        <JerseyNumber jerseyNumber={jerseyNumber} />
        <Name name={name} />
        <Age age={age} />
        <Club club={club} />
        <Nationality nationality={nationality} />
      </Card.Body>
    </div>
  );
}
