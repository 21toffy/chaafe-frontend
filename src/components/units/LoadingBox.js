import React from "react";
import Loader from "react-loader-spinner";

const LoadingBox = () => {
  return (
    <div style={{ width: "inherit", height: "inherit" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
        }}
      >
        <Loader
          type="ThreeDots"
          color="#1527C3"
          height={100}
          width={100}
          timeout={0}
        />
      </div>
    </div>
  );
};

export default LoadingBox;
