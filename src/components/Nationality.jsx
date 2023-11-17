import React from "react";
import Button from "react-bootstrap/Button";

const Nationality = ({ nationality }) => {
  return (
    <div>
      <Button
        variant="primary"
        style={{
          fontSize: "25px",
          fontWeight:"900",
          width: "200px",
          height: "50px",
          backgroundColor: "#540b0e",
          color: "#a2d2ff",
          borderRadius: "0 0 20px 20px",
          textAlign:"center",
          border:"none"
        }}
      >
        {nationality}
      </Button>
    </div>
  );
};

export default Nationality;
