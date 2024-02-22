import React, { Suspense, lazy } from "react";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const CollectionsPage = lazy(() => import("./pages/CollectionsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const ErrorsPage = lazy(() => import("./pages/ErrorsPage"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Info = lazy(() => import("./pages/Account/Info"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const SearchResultsPage = lazy(() => import("./pages/SearchResultsPage"));
const ShoppingCardPage = lazy(() => import("./pages/ShoppingCardPage"));
const VerificationReset = lazy(() => import("./pages/Auth/VerificationReset"));
const WishList = lazy(() => import("./pages/Account/WishList"));
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountLayout from "./layouts/AccountLayout";
import Loader from "./components/Loader";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./utils/ProtectecRoute";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckOut />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/collections" element={<CollectionsPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route
                path="/card"
                element={
                  <ProtectedRoute>
                    <ShoppingCardPage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/results" element={<SearchResultsPage />}></Route>
              <Route
                path="/details/:id/:title"
                element={<DetailPage />}
              ></Route>
              <Route path="*" element={<ErrorsPage />} />
            </Route>

            <Route path="auth/" element={<LoginRegisterLayout />}>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="resetpassword" element={<ResetPassword />}></Route>
              <Route path="forgotpassword" element={<ForgotPassword />}></Route>
              <Route
                path="verification"
                element={<VerificationReset />}
              ></Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>

            <Route
              path="myaccount/"
              element={
                <ProtectedRoute>
                  <AccountLayout />
                </ProtectedRoute>
              }
            >
              <Route path="info" element={<Info />}></Route>
              <Route path="wishlist" element={<WishList />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
