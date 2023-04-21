import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import ProductContainer from "./components/product/ProductContainer";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:profileId",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createProduct",
    element: <CreateProduct />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
