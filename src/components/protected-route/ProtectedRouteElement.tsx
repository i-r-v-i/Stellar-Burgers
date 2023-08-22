import { useLocation } from "react-router-dom";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { saveUserPath } from "../../services/actions/user";
import { getUser } from "../utils/constants";
import { TRouteProps } from "../../services/types/constants";

export const ProtectedRouteElement: FC<TRouteProps> = ({ element }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userData } = useSelector(getUser);

  useEffect(() => {
    {
      dispatch(saveUserPath(location.pathname));
    }
  }, [dispatch, location.pathname]);

  return userData ? element : <Navigate to="/login" replace />;
};
