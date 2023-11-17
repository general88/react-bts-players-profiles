import React from "react";

const Club = ({ club }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
          marginTop: "10px",
          fontWeight: "900",
        }}
      >
        {club}
      </h1>
    </div>
  );
};

export default Club;
