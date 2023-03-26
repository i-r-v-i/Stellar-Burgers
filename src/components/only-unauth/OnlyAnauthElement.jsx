import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUser } from "../utils/constants";
import { Navigate } from "react-router-dom";

export function OnlyUnauthElement({ element }) {
  const {userData} = useSelector(getUser);

  if (userData) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
}

OnlyUnauthElement.propTypes = {
  element: PropTypes.element,
};
