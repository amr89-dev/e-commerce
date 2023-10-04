import OrderContextProvider from "./orderContex";
import ProductContextProvider from "./productContext";
import ShoppingCartContextProvider from "./shoppingCartContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <ProductContextProvider>
      <ShoppingCartContextProvider>
        <OrderContextProvider>{children}</OrderContextProvider>;
      </ShoppingCartContextProvider>
    </ProductContextProvider>
  );
};

export default MainContextProvider;
