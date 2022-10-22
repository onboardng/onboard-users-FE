import { ReactNode } from "react";
import Spinner from "../Loader/Spinner";

interface IButtonProps {
  children?: ReactNode;
  loader?: boolean;
  [key: string]: any;
}
const Button = ({ loader, children, ...rest }: IButtonProps): JSX.Element => {
  return (
    <button type="submit" {...rest}>
      {loader ? <Spinner /> : <>{children}</>}
    </button>
  );
};

export default Button;
