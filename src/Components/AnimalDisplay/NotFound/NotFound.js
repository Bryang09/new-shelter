import React from "react";
import Nav from "../../Nav/Nav";

const NotFound = () => {
  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <Nav />
      <div className="notFound" style={styles}>
        <h1>Results Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
