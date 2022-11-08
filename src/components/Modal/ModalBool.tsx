import React, { ReactNode } from "react";
import Popup from "reactjs-popup";

interface Iprops {
  children: unknown;
  borderRadius?: string;
  open?: boolean;
}

const ModalBool = ({ children, open, ...rest }: Iprops) => {
  const { borderRadius } = rest;
  return (
    <Popup
      position="right center"
      modal
      nested
      open={open}
      contentStyle={{
        maxHeight: "80%",
        padding: 0,
        borderRadius: borderRadius || "12px",
        backgroundColor: "white",
        width: "fit-content",
        boxShadow: "none",
      }}
    >
      {children as ReactNode}
    </Popup>
  );
};

export default ModalBool;
