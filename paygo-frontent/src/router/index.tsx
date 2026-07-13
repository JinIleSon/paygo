import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.tsx';
import SignupPage from '../pages/auth/SignupPage.tsx';
import TermsOfServicePage from '../pages/auth/terms/TermsOfServicePage.tsx';
import PrivacyConsentPage from '../pages/auth/terms/PrivacyConsentPage.tsx';
import MarketingConsentPage from '../pages/auth/terms/MarketingConsentPage.tsx';
import WalletHomePage from '../pages/wallet/WalletHomePage.tsx';
import MainLayout from '../components/layout/main/MainLayout.tsx';
import WalletChargePage from '../pages/wallet/WalletChargePage.tsx';
import WalletHistoryPage from '../pages/wallet/WalletHistoryPage.tsx';
import ProductListPage from '../pages/shopping/ProductListPage.tsx';
import CartPage from '../pages/shopping/CartPage.tsx';
import OrderListPage from '../pages/shopping/OrderListPage.tsx';
import OrderDetailPage from '../pages/shopping/OrderDetailPage.tsx';
import ProductDetailPage from '../pages/shopping/ProductDetailPage.tsx';
import ProductPaymentPage from '../pages/shopping/ProductPaymentPage.tsx';

export const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/terms-of-service', element: <TermsOfServicePage /> },
    { path: '/privacy-consent', element: <PrivacyConsentPage /> },
    { path: '/marketing-consent', element: <MarketingConsentPage /> },
    { element: <MainLayout />, children: [

        // 지갑
        { path: '/wallet/home', element: <WalletHomePage /> },
        { path: '/wallet/charge', element: <WalletChargePage /> },
        { path: '/wallet/history', element: <WalletHistoryPage /> },

        // 쇼핑
        { path: '/shopping/product-list', element: <ProductListPage />},
        { path: '/shopping/product-detail', element: <ProductDetailPage />},
        { path: '/shopping/product-payment', element: <ProductPaymentPage />},
        { path: '/shopping/cart', element: <CartPage />},
        { path: '/shopping/order-list', element: <OrderListPage />},
        { path: '/shopping/order-detail', element: <OrderDetailPage />},
    ]}
]);
