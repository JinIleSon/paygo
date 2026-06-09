import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.tsx';
import SignupPage from '../pages/auth/Signup.tsx';

export const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
]);
