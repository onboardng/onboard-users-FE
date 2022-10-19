import Icon from "../Icons";

const ModalClose = ({ close }: { close: () => void }) => {
  return (
    <div
      onClick={close}
      className="justify-center flex cursor-pointer rounded-full bg-white h-10 w-10 gap-2 items-center absolute z-50 -top-[50px] md:-top-[40px] right-[25px] md:-right-[40px]"
    >
      <Icon width={14} height={14} id="close-green-icon" />
    </div>
  );
};

export default ModalClose;
