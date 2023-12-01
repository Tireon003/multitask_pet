import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

export const publicRoutes = [
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/signup',
        element: "SignUpPage" // изменить на компонент
    },
    {
        path: 'login',
        element: "LogInPage" // изменить на компонент
    }
]

export const privateRoutes = [
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/signup',
        element: "SignUpPage" // изменить на компонент
    },
    {
        path: 'login',
        element: "LogInPage" // изменить на компонент
    }
]