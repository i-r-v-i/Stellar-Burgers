import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { saveUserPath } from "../../services/actions/user";
import { getUser } from "../utils/constants";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

type TProtectedRouteElementProps = {
  element: React.ReactElement;
};

export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  element,
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(getUser);

  useEffect(() => {
    {
      dispatch(saveUserPath(location.pathname));
    }
  }, [dispatch, location.pathname]);

  return userData ? element : <Navigate to="/login" replace />;
};
