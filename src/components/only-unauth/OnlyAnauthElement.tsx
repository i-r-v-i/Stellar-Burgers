import { getUser } from "../utils/constants";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { TRouteProps } from "../../services/types/constants";
import { useAppSelector } from "../../services/types/hooks";

const OnlyUnauthElement: FC<TRouteProps> = ({ element }) => {
  const { userData } = useAppSelector(getUser);

  if (userData) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
};

export default OnlyUnauthElement;
