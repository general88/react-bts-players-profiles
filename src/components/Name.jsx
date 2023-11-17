import React from "react";
import Card from "react-bootstrap/Card";

const Name = ({ name }) => {
  return (
    <div>
      <Card.Title
        style={{
          fontSize: "30px",
          marginTop: "20px",
          fontWeight: "900",
        }}
      >
        {name}
      </Card.Title>
    </div>
  );
};

export default Name;
