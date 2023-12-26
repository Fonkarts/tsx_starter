import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import XlsVisualizer from "../pages/XlsVisualizer/XlsVisualizer";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
        {
            path: "/*",
            element: <PageNotFound />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
