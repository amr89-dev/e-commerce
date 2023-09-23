/* eslint-disable */
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";
import "./styles.css";
const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const {
    cartItems,
    shoppingCartIsOpen,
    handleOpenShoppingCart,
    addItemToCart,
    delItemFromCart,
    handleOrders,
    orders,
  } = context;
  const index = orders.length;
  const productsToRender = cartItems;
  const totalPrice = cartItems.reduce((acc, el) => {
    const subtotal = el.quantity * el.price;
    return acc + subtotal;
  }, 0);

  return (
    <div
      className={`${
        !shoppingCartIsOpen
          ? "hidden"
          : "shoppingCart fixed top-0 right-0 border border-black rounded-lg bg-white flex flex-col"
      }`}
    >
      <div className=" flex flex-row  justify-between py-4 px-5 ">
        <h2 className="font-bold">Carrito de compras</h2>
        <button
          className="hover:text-gray-500"
          onClick={() => {
            handleOpenShoppingCart();
          }}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className=" flex-1 overflow-auto scrollBar ">
        {productsToRender.map((el) => (
          <div
            key={el.id}
            className="relative flex flex-row justify-between items-center border  rounded p-4 w-[90%] mx-auto mb-2"
          >
            <button
              onClick={() => {
                delItemFromCart(el.id, true);
              }}
              className="absolute top-1 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-400 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <img
              src={el.images[0]}
              alt="item"
              className="w-10 h-10 object-contain mr-2"
            />

            <div>
              <p className="text-sm">{el.name}</p>
              <div className="flex flex-row">
                <button
                  onClick={() => {
                    delItemFromCart(el.id);
                  }}
                >
                  -
                </button>
                <div>{el.quantity}</div>
                <button
                  onClick={() => {
                    addItemToCart(el.id);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="font-bold">${el.price * el.quantity}</div>
          </div>
        ))}
      </div>
      <p className="w-[90%] h-auto mx-auto text-xl font-bold">
        Total: {totalPrice.toFixed(2)}{" "}
      </p>
      <Link
        to={`/orders/${index}`}
        className="w-[90%] h-auto mx-auto bg-black hover:bg-black/90 text-white text-lg text-center p-3 rounded-lg my-4"
        onClick={() => {
          handleOpenShoppingCart(false);
          handleOrders();
        }}
      >
        Ir a pagar
      </Link>
    </div>
  );
};

export default ShoppingCart;
