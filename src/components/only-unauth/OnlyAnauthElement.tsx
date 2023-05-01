import { getUser } from "../utils/constants";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "../../services/types/hooks";

type TOnlyUnauthElementProps = {
  element: React.ReactElement;
};

export const OnlyUnauthElement: FC<TOnlyUnauthElementProps> = ({ element }) => {
  const { userData } = useAppSelector(getUser);

  if (userData) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
};
