import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUser } from "../utils/data";
import { Navigate } from "react-router-dom";

export function OnlyForAuthElement({ element }) {
  const {user} = useSelector(getUser);

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
}

OnlyForAuthElement.propTypes = {
  element: PropTypes.element,
};
