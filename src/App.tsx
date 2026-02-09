import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initGA, logPageView } from "./lib/analytics";
import { AudioProvider } from "./contexts/AudioContext";
import Index from "./components/ui/pages/Index";
import PrivacyPolicy from "./components/ui/pages/PrivacyPolicy";
import TermsOfService from "./components/ui/pages/TermsOfService";
import DataSecurity from "./components/ui/pages/DataSecurity";
import HowItWorks from "./components/ui/pages/HowItWorks";
import Integrations from "./components/ui/pages/Integrations";
import CaseStudies from "./components/ui/pages/CaseStudies";
import CaseStudyDetail from "./components/ui/pages/CaseStudyDetail";
import RealEstateAssistant from "./components/ui/pages/RealEstateAssistant";
import SolarLeadQualification from "./components/ui/pages/SolarLeadQualification";
import MedicalReceptionist from "./components/ui/pages/MedicalReceptionist";
import EcommerceCustomerSupport from "./components/ui/pages/EcommerceCustomerSupport";
import VirtualReceptionist from "./components/ui/pages/VirtualReceptionist";
import CallAnsweringService from "./components/ui/pages/CallAnsweringService";
import ThankYouBooking from "./components/ui/pages/ThankYouBooking";
import AppointmentBooking from "./components/ui/pages/AppointmentBooking";
import FloatingBookButton from "./components/FloatingBookButton";
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
    <AudioProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <ScrollToTop />
        <FloatingBookButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-real-estate-assistant" element={<RealEstateAssistant />} />
          <Route path="/ai-solar-lead-qualification" element={<SolarLeadQualification />} />
          <Route path="/ai-medical-receptionist" element={<MedicalReceptionist />} />
          <Route path="/ai-ecommerce-customer-support" element={<EcommerceCustomerSupport />} />
          <Route path="/virtual-receptionist" element={<VirtualReceptionist />} />
          <Route path="/call-answering-service" element={<CallAnsweringService />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          <Route path="/thank-you-booking" element={<ThankYouBooking />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/data-security" element={<DataSecurity />} />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;