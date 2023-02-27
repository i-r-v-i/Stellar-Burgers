import AppHeader from "../app-header/AppHeader";
import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import NotFound404 from "../../pages/not-found"
import ProfilePage from "../../pages/profile"

export default function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
      
    </>
  );
}
