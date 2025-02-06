import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninPage } from "./routes/signin";
import { SignupPage } from "./routes/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsPage } from "./routes/products-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
  },
  {
    path: "/signin",
    element: <SignupPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    index: true,
    // children: [
    //   {
    //     path: "/products/:id",
    //     element: <ProductsPage />,
    //   },
    // ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
