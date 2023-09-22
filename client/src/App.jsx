import { useRoutes } from "react-router-dom";
import ShoppinCartProvider from "./context/index";
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
        path: "/zapatos",
        element: <Home />,
      },
      {
        path: "/accesorios",
        element: <Home />,
      },
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
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
      <ShoppinCartProvider>
        <NavBar />
        <AppRouter />
        <ProductDetail />
        <ShoppingCart />
      </ShoppinCartProvider>
    </>
  );
}

export default App;
