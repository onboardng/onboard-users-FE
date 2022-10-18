import React, { ReactNode } from "react";
import Popup from "reactjs-popup";

interface Iprops {
  children: unknown;
  trigger: string | JSX.Element;
}

const Modal = ({ children, trigger, ...rest }: Iprops) => {
  return (
    <Popup
      trigger={<div>{trigger}</div>}
      position="right center"
      modal
      lockScroll
      nested
      contentStyle={{
        maxHeight: "80%",
        borderRadius: "12px",
        backgroundColor: "white",
        width: "fit-content",
      }}
    >
      {children as ReactNode}
    </Popup>
  );
};

export default Modal;
