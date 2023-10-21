import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/LogRegest/Login";
import Register from "./component/LogRegest/Register";
import HomePage from "./pages/HomePage";
import Curriculum from "./pages/CurriculumPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import OurFeaturedPage from "./pages/OurFeaturedPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import TermsPage from "./pages/TermsPage";
import FAQPage from "./pages/FAQPage";
import LearnUrduPage from "./pages/LearnUrduPage";
import LearnArabicPage from "./pages/LearnArabicPage";
import TajweedPage from "./pages/TajweedPage";
import LearnAdhan from "./component/LearnComponents/LearnAdhan";
import MemorizationPage from "./pages/MemorizationPage";
import BookFreeTrailPage from "./pages/BookFreeTrailPage";
import JoinAsTeacherPage from "./pages/JoinAsTeacherPage";
import Profile from "./component/ProfileComponents/Profile";
import Confirm from "./pages/Confirm";
// POSTS
import BenefitsOfMemorizingQuran from "./component/BlogComponents/Posts/BenefitsOfMemorizingQuran";
import BenefitsOfSurahArRahman from "./component/BlogComponents/Posts/BenefitsOfSurahArRahman";
import HowToMemorize from "./component/BlogComponents/Posts/HowToMemorize";
import TipsTajweed from "./component/BlogComponents/Posts/TipsTajweed";
import WhyMemorizeQuran from "./component/BlogComponents/Posts/WhyAr";

import { BrowserRouter } from "react-router-dom";
import ForgotPassword from "./component/LogRegest/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import BlogDetails from "./component/BlogComponents/Posts/BlogDetails";

export default function App() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our-featured" element={<OurFeaturedPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/course/learnurdu" element={<LearnUrduPage />} />
        <Route path="/course/learnarabic" element={<LearnArabicPage />} />
        <Route path="/course/tajweedulquran" element={<TajweedPage />} />
        <Route path="/course/adhan" element={<LearnAdhan />} />
        <Route path="/course/memorizatingquran" element={<MemorizationPage />} />
        <Route path="/bookfreetrail" element={<BookFreeTrailPage />} />
        <Route path="/joinasteacher" element={<JoinAsTeacherPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route
          path="/blogs/importanceofquran"
          element={<BenefitsOfMemorizingQuran />}
        />

        <Route
          exact
          path="/blogs/quranrecitation"
          element={<BenefitsOfSurahArRahman />}
        />
        <Route
          exact
          path="/blogs/understandquran"
          element={<HowToMemorize />}
        />
        <Route exact path="/blogs/learningqurantips" element={<TipsTajweed />} />
        <Route
          exact
          path="/blogs/WhyMemorizeQuran"
          element={<WhyMemorizeQuran />}
        />
        <Route path="/confirmation/:id" element={<Confirm />} />
      </Routes>
    </>
  );
}
