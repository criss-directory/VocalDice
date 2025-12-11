import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initGA, logPageView } from "./lib/analytics";
import Index from "./components/ui/pages/Index";
import PrivacyPolicy from "./components/ui/pages/PrivacyPolicy";
import TermsOfService from "./components/ui/pages/TermsOfService";
import DataSecurity from "./components/ui/pages/DataSecurity";
import ScrollToTop from "./components/ScrollToTop";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-security" element={<DataSecurity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;