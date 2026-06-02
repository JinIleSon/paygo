import {createBrowserRouter} from "react-router-dom";
import LoginPage from '../pages/auth/LoginPage.tsx';

export const router = createBrowserRouter([
    { path : '/login', element: <LoginPage /> }
])