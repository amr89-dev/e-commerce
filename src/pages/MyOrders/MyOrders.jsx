import { useContext, useEffect } from "react";
import Layout from "../../component/Layout/Layout";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../component/OrderCard/OrderCard";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  const { orders, setCartItems } = context;
  console.log(orders);
  useEffect(() => {
    setCartItems([]);
  }, []);
  return (
    <Layout>
      <h2 className="font-bold text-center text-2xl mb-4">Mis ordenes</h2>
      <div className=" w-full flex flex-col justify-center items-center">
        {orders.map((el) => (
          <OrderCard key={el.id} id={el.id} />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
