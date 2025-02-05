import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninPage } from "./routes/signin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
