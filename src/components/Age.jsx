import React from "react";
import Card from "react-bootstrap/Card";

const Age = ({ age }) => {
  return (
    <div>
      <Card.Title
        style={{
          fontSize: "20px",
          marginTop: "10px",
          fontWeight: "00",
        }}
      >
        {age} Years
      </Card.Title>
    </div>
  );
};

export default Age;
