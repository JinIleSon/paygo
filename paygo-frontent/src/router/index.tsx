import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.tsx';
import SignupPage from '../pages/auth/SignupPage.tsx';
import TermsOfServicePage from '../pages/auth/terms/TermsOfServicePage.tsx';
import PrivacyConsentPage from '../pages/auth/terms/PrivacyConsentPage.tsx';

export const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/terms-of-service', element: <TermsOfServicePage /> },
    { path: '/privacy-consent', element: <PrivacyConsentPage /> },
]);
