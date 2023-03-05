import AppHeader from "../app-header/AppHeader";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "../main/Main";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import NotFound404 from "../../pages/not-found";
import ProfilePage from "../../pages/profile";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";

export default function App() {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = (evt) => {
    // dispatch({ type: DATA_MODAL_FAILED });
    evt.stopPropagation();
    navigate(-1);
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />}>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal closePopup={handleCloseModal} title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}
