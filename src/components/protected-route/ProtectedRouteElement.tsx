import { useLocation } from "react-router-dom";
import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { saveUserPath } from "../../services/actions/user";
import { getUser } from "../utils/constants";
import { TRouteProps } from "../../services/types/constants";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

export const ProtectedRouteElement: FC<TRouteProps> = ({ element }) => {
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
