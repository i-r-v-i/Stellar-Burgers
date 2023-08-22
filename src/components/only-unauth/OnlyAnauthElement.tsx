import { useSelector } from "react-redux";
import { getUser } from "../utils/constants";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { TRouteProps } from "../../services/types/constants";

const OnlyUnauthElement: FC<TRouteProps> = ({ element }) => {
  const { userData } = useSelector(getUser);

  if (userData) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
};

export default OnlyUnauthElement;
