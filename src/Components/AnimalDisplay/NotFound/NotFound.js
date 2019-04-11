import React from "react";
import Nav from "../../Nav/Nav";

const NotFound = () => {
  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#efefe"
  };

  return (
    <>
      <Nav />
      <div className="notFound" style={styles}>
        <h1 style={{ fontWeight: 400 }}>Results Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
