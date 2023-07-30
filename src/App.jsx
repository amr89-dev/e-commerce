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

function App() {
  const AppRouter = () => {
    const routes = useRoutes([
      {
        path: "/",
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
