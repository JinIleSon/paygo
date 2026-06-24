import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.tsx';
import SignupPage from '../pages/auth/SignupPage.tsx';
import TermsOfServicePage from '../pages/auth/terms/TermsOfServicePage.tsx';
import PrivacyConsentPage from '../pages/auth/terms/PrivacyConsentPage.tsx';
import MarketingConsentPage from '../pages/auth/terms/MarketingConsentPage.tsx';
import WalletHomePage from '../pages/wallet/WalletHomePage.tsx';
import MainLayout from '../components/layout/main/MainLayout.tsx';
import WalletChargePage from '../pages/wallet/WalletChargePage.tsx';

export const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/terms-of-service', element: <TermsOfServicePage /> },
    { path: '/privacy-consent', element: <PrivacyConsentPage /> },
    { path: '/marketing-consent', element: <MarketingConsentPage /> },
    { element: <MainLayout />, children: [
        { path: '/wallet/home', element: <WalletHomePage /> },
        { path: '/wallet/charge', element: <WalletChargePage /> },
    ]}
]);
