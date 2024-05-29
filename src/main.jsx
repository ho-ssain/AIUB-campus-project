import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/6.404/404";
import Activities from "./pages/2.Activities/Activities.jsx";
import Contact from "./pages/5.Contact/Contact.jsx";
import Clubs from "./pages/4.Clubs/Clubs.jsx";
import Facilities from "./pages/3.Facilities/Facilities.jsx";
import Home from "./pages/1.Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "activities", element: <Activities /> },
      { path: "facilities", element: <Facilities /> },
      { path: "contact", element: <Contact /> },
      { path: "clubs", element: <Clubs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
