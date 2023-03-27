import AppHeader from "../app-header/AppHeader";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ProtectedRouteElement } from "../protected-route/ProtectedRouteElement";
import { OnlyUnauthElement } from "../only-unauth/OnlyAnauthElement";
import { useDispatch, useSelector } from "react-redux";
import Main from "../main/Main";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import NotFound404 from "../../pages/not-found";
import ProfilePage from "../../pages/profile";
import { Modal } from "../modal/Modal";
import Feed from "../../pages/feed/Feed";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { checkAuth } from "../../services/actions/user";
import { getIngredients } from "../../services/actions/ingredients";
import { getOrderNumber, getStoreOrders, getUser } from "../utils/constants";
import FeedOrderDetails from "../feed-order-details/FeedOrderDetails";
import ProfileForm from "../profile-form/ProfileForm";
import ProfileOrders from "../profile-orders/ProfileOrders";


export default function App() {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(checkAuth());
  }, [dispatch]);

// const user = useSelector(getUser);
// console.log(user)

  
  const handleCloseModal = (evt) => {
    evt.stopPropagation();
    navigate(-1);
  };

  const { orderNumber } = useSelector(getOrderNumber);
   console.log(orderNumber);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:id" element={<FeedOrderDetails allOrders='true'/>} />
        <Route
          path="/register"
          element={<OnlyUnauthElement element={<Register />} />}
        />
        <Route
          path="/login"
          element={<OnlyUnauthElement element={<Login />} />}
        />
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
        <Route path="/profile/orders/:id"  element={<ProtectedRouteElement element={<FeedOrderDetails />} /> } />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal closePopup={handleCloseModal} title="Детали ингредиента">
                <IngredientDetails bac />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal closePopup={handleCloseModal} modalForOrder='true' title={`#${orderNumber}`}>
                <FeedOrderDetails isModal={true} allOrders='true' />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal closePopup={handleCloseModal} modalForOrder='true' title={`#${orderNumber}`}>
                <FeedOrderDetails isModal={true} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}
