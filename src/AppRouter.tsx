import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Registration from './pages/Registration';
import Otp from './pages/Otp';
import Login from './pages/Login';

const routing = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />, // This is a layout component for nested routes
        children: [
            { index: true, element: <Registration /> }, // Default route
            { path: "otp", element: <Otp /> },
            { path: "login", element: <Login /> }
        ]
    }
])

const AppRouter = () => {
  return (
    <RouterProvider router={routing} />
  )
}

export default AppRouter;
