import AuthContextProvider from "./authContex";
import ErrorLoadingProvider from "./errorLoadingContex";
import OrderContextProvider from "./orderContex";
import ProductContextProvider from "./productContext";
import ShoppingCartContextProvider from "./shoppingCartContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <ErrorLoadingProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <ShoppingCartContextProvider>
            <OrderContextProvider>{children}</OrderContextProvider>
          </ShoppingCartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </ErrorLoadingProvider>
  );
};

export default MainContextProvider;
