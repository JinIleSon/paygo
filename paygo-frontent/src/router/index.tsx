import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.tsx';
import SignupPage from '../pages/auth/SignupPage.tsx';
import TermsOfServicePage from '../pages/auth/terms/TermsOfServicePage.tsx';
import PrivacyConsentPage from '../pages/auth/terms/PrivacyConsentPage.tsx';
import MarketingConsentPage from '../pages/auth/terms/MarketingConsentPage.tsx';
import Sidebar from '../components/layout/main/Sidebar.tsx';

export const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/terms-of-service', element: <TermsOfServicePage /> },
    { path: '/privacy-consent', element: <PrivacyConsentPage /> },
    { path: '/marketing-consent', element: <MarketingConsentPage /> },
    { path: '/sidebar', element: <Sidebar />},
]);
