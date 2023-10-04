import { createContext, useContext, useState } from "react";
import { useProducts } from "./productContext";

export const ShoppingCartContext = createContext();
//eslint-disable-next-line
const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const { products } = useProducts();
  let productsToRender = useState(cartItems);

  const addItemToCart = (id) => {
    const newItem = products.find((el) => el.id === id);

    const itemExist = cartItems.find((el) => el.id === newItem.id);

    itemExist
      ? setCartItems(
          cartItems.map((el) =>
            el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
          )
        )
      : setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
  };
  const delItemFromCart = (id, all = false) => {
    if (all) {
      setCartItems(cartItems.filter((el) => el.id !== id));
    }

    const itemToDelete = cartItems.find((el) => el.id === id);

    itemToDelete.quantity > 1
      ? setCartItems(
          cartItems.map((el) =>
            el.id === id ? { ...el, quantity: el.quantity - 1 } : el
          )
        )
      : setCartItems(cartItems.filter((el) => el.id !== id));
  };
  const handleOpenShoppingCart = (flag) => {
    if (flag) {
      setShoppingCartIsOpen(true);
    }
    if (!flag && flag !== undefined) {
      setShoppingCartIsOpen(false);
    }

    setShoppingCartIsOpen(!shoppingCartIsOpen);
  };
  const data = {
    cartItems,
    addItemToCart,
    delItemFromCart,
    productsToRender,
    handleOpenShoppingCart,
    shoppingCartIsOpen,
    setCartItems,
  };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ShoppingCartContext);
};

export default ShoppingCartProvider;
