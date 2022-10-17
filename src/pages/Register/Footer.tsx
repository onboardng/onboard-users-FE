import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-4 fixed bottom-4 w-full md:w-[40%]">
      <Link to="/" className="flex gap-4 items-center">
        <HiHome className="text-xl" />
        <p className="text-base font-medium">Back to home</p>
      </Link>
    </div>
  );
};

export default Footer;
