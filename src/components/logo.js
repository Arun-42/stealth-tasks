import React, { useState } from "react";
import "./logo.css";
import AspectRatioOutlinedIcon from "@material-ui/icons/AspectRatioOutlined";

export const Logo = ({ ModalToggle, modal }) => {
  return (
    <React.Fragment>
      <img
        onClick={ModalToggle}
        className="logo"
        src={require("../testImage.png")}
        alt="logo"
      />
      {modal ? (
        <React.Fragment />
      ) : (
        <AspectRatioOutlinedIcon className="icon" />
      )}
    </React.Fragment>
  );
};
