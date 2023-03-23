import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// Header
// Body
// Footer

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
