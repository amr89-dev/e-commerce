import { useContext } from "react";
import "./styles.css";
import Carrousel from "../Carrousel/Carrousel";
import { ProductContext } from "../../contexts/productContext";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
//import RatingStars from "../RatingStars/RatingStars";

const ProductDetail = () => {
  const productContext = useContext(ProductContext);
  const { detailIsOpen, productDetail, handleOpenProductDetail } =
    productContext;
  const { addItemToCart, handleOpenShoppingCart } =
    useContext(ShoppingCartContext);

  return (
    <div
      className={`${
        !detailIsOpen
          ? "hidden"
          : "productDetail fixed w-[40%] border  border-black  rounded-lg bg-white top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] "
      }`}
    >
      <div className=" flex flex-row justify-between py-4 px-5 ">
        <h2 className="font-bold">Detalle de producto</h2>
        <button
          className="hover:text-gray-500"
          onClick={() => {
            handleOpenProductDetail(true);
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
      <section className="w-[90%] h-[85%] grid grid-cols-2 grid-rows-1 mx-auto gap-2 p-4 pb-8">
        <Carrousel>
          {productDetail[0]?.images.map((el) => {
            return (
              <img
                key={el}
                src={el}
                alt="img-detail"
                className="object-fill rounded-lg  "
              />
            );
          })}
        </Carrousel>
        <div className="flex flex-col items-center justify-around">
          <h3 className="font-bold text-base ">{productDetail[0]?.name}</h3>
          <p className=" text-sm">{productDetail[0]?.description}</p>
          <p className="font-bold text-xl">${productDetail[0]?.price}</p>
          {/*  <RatingStars rating={productDetail[0]?.rating.rate} /> */}
          <button
            className="  rounded-lg w-full p-2 flex justify-center items-center font-semibold bg-black/80 text-white hover:scale-90 hover:bg-black/60"
            onClick={() => {
              addItemToCart(productDetail[0]?.id);
              handleOpenShoppingCart();
              handleOpenProductDetail(true);
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
