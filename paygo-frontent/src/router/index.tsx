import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/loginPage.tsx';
import SignupPage from '../pages/auth/signupPage.tsx';
import TermsOfServicePage from '../pages/auth/terms/termsOfServicePage.tsx';
import PrivacyConsentPage from '../pages/auth/terms/privacyConsentPage.tsx';
import MarketingConsentPage from '../pages/auth/terms/marketingConsentPage.tsx';
import WalletHomePage from '../pages/wallet/walletHomePage.tsx';
import MainLayout from '../components/layout/main/mainLayout.tsx';
import WalletChargePage from '../pages/wallet/walletChargePage.tsx';
import WalletHistoryPage from '../pages/wallet/walletHistoryPage.tsx';
import ProductListPage from '../pages/shopping/productListPage.tsx';
import CartPage from '../pages/shopping/cartPage.tsx';
import OrderListPage from '../pages/shopping/orderListPage.tsx';
import OrderDetailPage from '../pages/shopping/orderDetailPage.tsx';
import ProductDetailPage from '../pages/shopping/productDetailPage.tsx';
import ProductPaymentPage from '../pages/shopping/productPaymentPage.tsx';

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
        { path: '/shopping/product-detail/:productId', element: <ProductDetailPage />},
        { path: '/shopping/product-payment', element: <ProductPaymentPage />},
        { path: '/shopping/cart', element: <CartPage />},
        { path: '/shopping/order-list', element: <OrderListPage />},
        { path: '/shopping/order-detail', element: <OrderDetailPage />},
    ]}
]);
