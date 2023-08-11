import { useContext, useEffect } from "react";
import Layout from "../../component/Layout/Layout";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  const { orders, setCartItems } = context;
  useEffect(() => {
    setCartItems([]);
  }, []);
  return (
    <Layout>
      <h2 className="font-bold text-center text-2xl mb-4">Mis ordenes</h2>
      <div className=" w-full flex flex-col justify-center items-center">
        {orders
          .map((el) => (
            <Link
              to={`/orders/${el.id}`}
              key={el.id}
              className=" w-1/3 border border-black rounded-lg p-3 mb-2 flex flex-row justify-between"
            >
              <div>
                <p>Orden: {el.date.replace(/\//g, "")}</p>
                <p>Cantidad productos: {el.products.length}</p>
              </div>
              <div>
                <p>Precio: {el.totalPrice.toFixed(2)}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          ))
          .reverse()}
      </div>
    </Layout>
  );
};

export default MyOrders;
