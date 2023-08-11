import { useContext } from "react";
import "./styles.css";
import { ShoppingCartContext } from "../../context";
import RatingStars from "../RatingStars/RatingStars";

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
      <aside className="w-[90%] h-[85%] mx-auto flex flex-col items-center md:items-stretch sm:flex-row gap-2 px-4 -mt-3">
        <img
          src={productDetail[0]?.image}
          alt="img-detail"
          className="max-w-[50%] object-contain p-4"
        />

        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-base ">
            {productDetail[0]?.title.split(" ").slice(0, 3).join(" ")}
          </h3>
          <p className=" text-sm">{productDetail[0]?.description}</p>
          <p className="font-bold text-xl">${productDetail[0]?.price}</p>
          <RatingStars rating={productDetail[0]?.rating.rate} />
        </div>
      </aside>
    </div>
  );
};

export default ProductDetail;
