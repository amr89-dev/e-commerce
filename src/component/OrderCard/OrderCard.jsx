import { useContext } from "react";
import Layout from "../Layout/Layout";
import { ShoppingCartContext } from "../../context";
import { Link, useParams } from "react-router-dom";

//eslint-disable-next-line
const OrderCard = () => {
  const context = useContext(ShoppingCartContext);
  const { orders } = context;
  const params = useParams();
  const productsOrder = orders[params.id].products;
  const totalPrice = productsOrder.reduce((acc, el) => {
    const subtotal = el.quantity * el.price;
    return acc + subtotal;
  }, 0);
  return (
    <Layout>
      <div className=" flex flex-col w-[40%] mx-auto justify-center items-center py-4 px-5 relative ">
        <Link to="/orders" className="absolute top-4 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <h2 className="font-bold  text-2xl mb-4">Mi orden</h2>

        <div className=" overflow-auto w-full mb-3 ">
          {productsOrder.map((el) => (
            <div
              key={el.id}
              className="relative flex flex-row justify-between items-center border  rounded p-4 w-[90%] mx-auto mb-2"
            >
              <img
                src={el.image}
                alt="item"
                className="w-10 h-10 object-contain mr-2"
              />

              <div>
                <p className="text-sm">
                  {el.title.split(" ").slice(0, 3).join(" ")}
                </p>
              </div>
              <div className="font-bold">${el.price}</div>
            </div>
          ))}
        </div>
        <p className=" h-auto text-xl  font-bold">
          Total: {totalPrice.toFixed(2)}
        </p>
      </div>
    </Layout>
  );
};

export default OrderCard;
