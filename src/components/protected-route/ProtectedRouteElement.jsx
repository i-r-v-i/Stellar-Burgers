import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getUserData } from "../../services/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { saveUserPath } from "../../services/actions/user";

export const ProtectedRouteElement = ({ element }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userData);

  useEffect(() => {
    {
      !user && dispatch(getUserData());
      dispatch(saveUserPath(location.pathname));
    }
  }, [user]);

  return user ? element : <Navigate to="/login" replace />;
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
};
