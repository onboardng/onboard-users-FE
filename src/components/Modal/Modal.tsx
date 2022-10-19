import React, { ReactNode } from "react";
import Popup from "reactjs-popup";

interface Iprops {
  children: unknown;
  trigger: string | JSX.Element;
  borderRadius?: string;
}

const Modal = ({ children, trigger, ...rest }: Iprops) => {
  const { borderRadius } = rest;
  return (
    <Popup
      trigger={<div>{trigger}</div>}
      position="right center"
      modal
      lockScroll
      nested
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

export default Modal;
