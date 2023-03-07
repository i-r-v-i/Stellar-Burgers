import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";

export function OnlyForAuthElement({ element }) {
  const user = useSelector((store) => store.user.userData);

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
}

OnlyForAuthElement.propTypes = {
  element: PropTypes.element,
};
