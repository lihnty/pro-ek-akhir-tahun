import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "@/App";
import Home from "./views/Home";
import Detail from "./views/Detail";
import "@/assets/main.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AboutUs from "./views/AboutUs.jsx";
import CampaignPage from './views/CampaignPage';
import ContactPage from './views/ContactPage';
import FAQPage from './views/FAQPage';
import ServicePage from './views/ServicePage';
import WhatsAppChatButton from './assets/WhatsAppChatButton';

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.baseURL = "http://localhost:8000/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <WhatsAppChatButton />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          
          <Route path="/about-us" element={<AboutUs />} />
              <Route path="/campaign" element={<CampaignPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/faq" element={<FAQPage />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
