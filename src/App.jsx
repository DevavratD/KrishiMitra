import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PublicLayout from "./PublicLayout";
import Layout from "./Layout";

// Import your pages
import Mainpage from "./pages/Mainpage";
import Signup from "./pages/Signpage";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";
import CropCare from "./pages/Cropcare";
import Weather from "./pages/Weather";
import News from "./pages/News";
import SoilCondition from "./pages/SoilCondition";
import ChatbotUI from "./pages/ChatbotUI";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes (No Header & Navbar) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Mainpage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Homepage />} />
        <Route path="chatbot" element={<ChatbotUI />} />
      </Route>

      {/* Routes with Header & Navbar */}
      <Route element={<Layout />}>
        <Route path="crop-care" element={<CropCare />} />
        <Route path="weather" element={<Weather />} />
        <Route path="news" element={<News />} />
        <Route path="soil" element={<SoilCondition />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
