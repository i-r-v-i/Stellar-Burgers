import { FC, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ProtectedRouteElement } from "../protected-route/ProtectedRouteElement";
import OnlyUnauthElement from "../only-unauth/OnlyAnauthElement";
import AppHeader from "../app-header/AppHeader";
import Main from "../main/Main";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import NotFound404 from "../../pages/not-found/not-found";
import ProfilePage from "../../pages/profile/profile";
import Modal from "../modal/Modal";
import Feed from "../../pages/feed/Feed";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import FeedOrderDetails from "../feed-order-details/FeedOrderDetails";
import ProfileForm from "../profile-form/ProfileForm";
import ProfileOrders from "../profile-orders/ProfileOrders";
import { checkAuth } from "../../services/actions/user";
import { getIngredients } from "../../services/actions/ingredients";
import { getOrderNumber } from "../utils/constants";
import { GET_NUMBER_FAILED } from "../../services/actions/order";
import { useDispatch, useSelector } from "react-redux";

const App: FC = () => {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(checkAuth());
  }, [dispatch]);

  const handleCloseModal = (evt: Event) => {
    evt.stopPropagation();
    navigate(-1);
    dispatch({ type: GET_NUMBER_FAILED });
  };

  const { orderNumber } = useSelector(getOrderNumber);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
        <Route path="/ingredients/:id" element={<IngredientDetails bac={false} />} />
        <Route path="/feed" element={<Feed />} />
        <Route
          path="/feed/:id"
          element={<FeedOrderDetails allOrders={true} isModal={false} />}
        />
        <Route path="/register" element={<OnlyUnauthElement element={<Register />} />} />
        <Route path="/login" element={<OnlyUnauthElement element={<Login />} />} />
        <Route
          path="/forgot-password"
          element={<OnlyUnauthElement element={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnauthElement element={<ResetPassword />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        >
          <Route index element={<ProfileForm />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
        <Route
          path="/profile/orders/:id"
          element={<FeedOrderDetails isModal={false} allOrders={false} />}
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal closePopup={() => handleCloseModal} title="Детали ингредиента">
                <IngredientDetails bac />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal
                closePopup={() => handleCloseModal}
                modalForOrder
                title={`#${orderNumber}`}
              >
                <FeedOrderDetails isModal allOrders />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal
                closePopup={() => handleCloseModal}
                modalForOrder
                title={`#${orderNumber}`}
              >
                <FeedOrderDetails isModal allOrders={false} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
