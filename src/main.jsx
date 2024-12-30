import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Portfolio", element: <Portfolio /> },
  { path: "/Services", element: <Services /> },
  { path: "/ServiceDetails", element: <ServiceDetails /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
