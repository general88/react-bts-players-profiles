import React from "react";
import Card from "react-bootstrap/Card";

const Picture = ({ image }) => {
  return (
    <div>
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: "25rem",
          height: "100%",
        }}
      />
    </div>
  );
};

// Picture.propTypes = {
//   image: PropTypes.array,
// };

export default Picture;
