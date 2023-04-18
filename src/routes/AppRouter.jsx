import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:id",
        element: <ProductPage />
    }
]);
