import React from "react";

const Ball = (props) => {
  const decalStyle = {
    position: "relative",
    width: "100px", // Adjust the size as needed
    height: "100px", // Adjust the size as needed
    backgroundImage: `url(${props.imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: 1,
  };

  return (
    <div style={decalStyle}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${props.decalUrl})`, // Replace with your decal image URL
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
    </div>
  );
};

const BallComponent = ({ icon, decalUrl, }) => {
  return (
    <div>
      <Ball imgUrl={icon} decalUrl={decalUrl} />
      
    </div>
  );
};

export default BallComponent;
