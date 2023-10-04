import { createContext, useState } from "react";
import { useCart } from "./shoppingCartContext";

export const OrderContext = createContext();
//eslint-disable-next-line
const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { cartItems } = useCart();
  const handleOrders = () => {
    const newOrder = {
      id: orders.length,
      date: new Date().toLocaleDateString(),
      products: [...cartItems],
      totalPrice: cartItems.reduce((acc, el) => {
        const sub = el.quantity * el.price;
        return sub + acc;
      }, 0),
    };
    setOrders([...orders, newOrder]);
  };
  const data = {
    orders,
    handleOrders,
  };
  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};

export default OrderContextProvider;
