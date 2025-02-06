import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignupPage } from "./routes/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsPage } from "./routes/products-page";
import { ProductDetailsPage } from "./routes/product-details-page";
import { ProductsLayout } from "./components/layouts/products-layout";

const router = createBrowserRouter([
  {
    element: <ProductsLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
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
