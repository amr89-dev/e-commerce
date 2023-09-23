import { useContext } from "react";
import "./styles.css";
import { ShoppingCartContext } from "../../context";
import Carrousel from "../Carrousel/Carrousel";
//import RatingStars from "../RatingStars/RatingStars";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { detailIsOpen, handleOpenDetail, productDetail } = context;

  return (
    <div
      className={`${
        !detailIsOpen
          ? "hidden"
          : "productDetail fixed  border border-black rounded-lg bg-white "
      }`}
    >
      <div className=" flex flex-row justify-between py-4 px-5 ">
        <h2 className="font-bold">Detalle de producto</h2>
        <button
          className="hover:text-gray-500"
          onClick={() => {
            handleOpenDetail(true);
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
            return <img key={el} src={el} alt="img-detail" className="" />;
          })}
        </Carrousel>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-base ">{productDetail[0]?.name}</h3>
          <p className=" text-sm">{productDetail[0]?.description}</p>
          <p className="font-bold text-xl">${productDetail[0]?.price}</p>
          {/*  <RatingStars rating={productDetail[0]?.rating.rate} /> */}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
