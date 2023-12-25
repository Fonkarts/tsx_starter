import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import XlsVisualizer from "../pages/XlsVisualizer/XlsVisualizer";

const Routes: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/visualizer",
            element: <XlsVisualizer />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
