import AuthContextProvider from "./authContex";
import ErrorLoadingProvider from "./errorLoadingContex";
import OrderContextProvider from "./orderContex";
import ProductContextProvider from "./productContext";
import ShoppingCartContextProvider from "./shoppingCartContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <ShoppingCartContextProvider>
          <OrderContextProvider>
            <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
          </OrderContextProvider>
        </ShoppingCartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default MainContextProvider;
