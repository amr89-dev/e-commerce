import { useRoutes } from "react-router-dom";
import MainContextProvider from "./contexts/index";
import Home from "./pages/Home/Home";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyOrders from "./pages/MyOrders/MyOrders";
import SignIn from "./pages/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import NavBar from "./component/NavBar/NavBar";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import OrderCard from "./component/OrderCard/OrderCard";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const AppRouter = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ropa-hombre",
        element: <Home />,
      },
      {
        path: "/ropa-mujer",
        element: <Home />,
      },
      {
        path: "/zapatos-hombre",
        element: <Home />,
      },
      {
        path: "/zapatos-mujer",
        element: <Home />,
      },
      {
        path: "/accesorios",
        element: <Home />,
      },
      {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/account",
            element: <MyAccount />,
          },
          {
            path: "/orders",
            element: <MyOrders />,
          },
          {
            path: "/orders/:id",
            element: <OrderCard />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },

      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ]);
    return routes;
  };

  return (
    <>
      <MainContextProvider>
        <NavBar />
        <AppRouter />
        <ProductDetail />
        <ShoppingCart />
      </MainContextProvider>
    </>
  );
}

export default App;
