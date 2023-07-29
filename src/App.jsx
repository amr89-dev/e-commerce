import { useRoutes } from "react-router-dom";
import ShoppinCartProvider from "./Context/index";
import Home from "./pages/Home/Home";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyOrders from "./pages/MyOrders/MyOrders";
import SignIn from "./pages/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import NavBar from "./component/NavBar/NavBar";
import ProductDetail from "./component/ProductDetail/ProductDetail";

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
      </ShoppinCartProvider>
    </>
  );
}

export default App;
