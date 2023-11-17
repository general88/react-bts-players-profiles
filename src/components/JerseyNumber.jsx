import React from "react";
import Button from "react-bootstrap/Button";

const JerseyNumber = ({ jerseyNumber }) => {
  return (
    <div>
      <Button
        variant="primary"
        style={{
          fontSize: "30px",
          width: "50px",
          height: "55px",
          backgroundColor: "#540b0e",
          border: "none",
          color: "#a2d2ff",
          borderRadius: "0 30px 0 30px",
          textAlign: "center",
          padding: "0 50px 0 20px",
          fontWeight:"900"
        }}
      >
        {jerseyNumber}
      </Button>
    </div>
  );
};

export default JerseyNumber;

console.log();
