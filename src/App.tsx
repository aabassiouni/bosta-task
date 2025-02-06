import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninPage } from "./routes/signin";
import { SignupPage } from "./routes/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
  },
  {
    path: "/signin",
    element: <SignupPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
