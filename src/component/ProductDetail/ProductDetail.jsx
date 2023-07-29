import { useContext } from "react";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import RatingStars from "../RatingStars/RatingStars";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { detailIsOpen, handleOpenDetail, productDetail } = context;
  return (
    <div
      className={`${
        !detailIsOpen
          ? "hidden"
          : "productDetail fixed top-16 border border-black rounded-lg bg-white "
      }`}
    >
      <div className=" flex flex-row  justify-between py-4 px-5 ">
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
      <aside className="w-[90%] h-[85%] mx-auto  scrollBar">
        <img
          src={productDetail[0]?.image}
          alt="img-detail"
          className="w-full h-auto"
        />

        <div className="flex flex-row justify-between items-center mt-4 ">
          <p className="font-bold text-right text-xl">
            ${productDetail[0]?.price}
          </p>
          <RatingStars rating={productDetail[0]?.rating.rate} />
        </div>
        <h3 className="font-bold text-base ">
          {productDetail[0]?.title.split(" ").slice(0, 3).join(" ")}
        </h3>
        <p className=" text-sm">{productDetail[0]?.description}</p>
      </aside>
    </div>
  );
};

export default ProductDetail;
