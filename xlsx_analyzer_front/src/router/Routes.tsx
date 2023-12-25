import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

const Routes: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
