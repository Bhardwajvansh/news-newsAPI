import React from "react";

const Spinner = (props) => {
  return (
    <div
      style={{
        zIndex: "10",
        width: "100%",
        height: "100vh",
        display: `${props.load=="loading"?"flex":"none"}`,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif"
        alt=""
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default Spinner;
