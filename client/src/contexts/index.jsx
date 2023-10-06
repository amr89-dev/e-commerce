import ErrorLoadingProvider from "./errorLoadingContex";
import OrderContextProvider from "./orderContex";
import ProductContextProvider from "./productContext";
import ShoppingCartContextProvider from "./shoppingCartContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <ProductContextProvider>
      <ShoppingCartContextProvider>
        <OrderContextProvider>
          <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
        </OrderContextProvider>
      </ShoppingCartContextProvider>
    </ProductContextProvider>
  );
};

export default MainContextProvider;
