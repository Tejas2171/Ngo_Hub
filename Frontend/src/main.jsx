import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Landing from "../src/Pages/Landing.jsx";
import BlogNews from "./Pages/BlogNews.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";

import NotFound from "./Pages/NotFound.jsx";
import AllBlogs from "./Pages/AllBlogs.jsx";
import SpecificBlog from "./Pages/SpecificBlog.jsx";
import SignUp from "./Pages/signUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import VerifyOtp from "./Pages/VerifyOtp.jsx";

import PaymentForm from "./components/PaymentForm.jsx";

import Donation from "./Pages/Donation.jsx";
import GetInvolved from "./Pages/GetInvolved.jsx";
import DonationForm from "./Pages/DonationForm.jsx";
import Notice from "./components/Notice.jsx";
import Campaigns from "./Pages/Campaigns.jsx";

import ForgotPassword from "./Pages/ForgotPassword.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import VolunteerForm from "./Pages/VolunteerForm.jsx";
import CampaignInfo from "./Pages/CampaignInfo.jsx";
import Admin from "./Pages/Admin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes within the Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/blognews" element={<BlogNews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donation/>} />
        <Route path="/campaigns" element={<Campaigns/>} />
        <Route path="/donation" element={<PaymentForm/>} />
        <Route path="/getinvolved" element={<GetInvolved/>} />
        <Route path="/volunteerform" element={<VolunteerForm/>} />
        <Route path="/campaigninfo" element={<CampaignInfo/>} />
        <Route path="/admin" element={<Admin/>} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/loginform" element={<LoginPage />} /> */}
      {/* <Route path="/signupform" element={<SignUpPage />} /> */}
      <Route path="/donationform" element={<DonationForm/>} />

      <Route path="/all-blogs" element={<AllBlogs/>} />
      <Route path="/blog/:id" element={<SpecificBlog/>} />
      <Route path="/signup" element={<SignUp role={"Volunteer"}/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/verifyOtp" element={<VerifyOtp/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password/:id" element={<ResetPassword/>} />

      {/* 404 Not Found route */}
      <Route path="/notice" element={<Notice/>}/>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

