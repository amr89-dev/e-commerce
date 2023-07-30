import { useContext } from "react";
import { ShoppingCartContext } from "../../context/index";
/*eslint-disable */
const ProductCard = ({ productData }) => {
  const context = useContext(ShoppingCartContext);
  const { addItemToCart, handleOpenDetail, detailFilter } = context;
  const { title, price, image, category, id } = productData;

  const handleCart = (item) => {
    addItemToCart(item);
  };

  return (
    <div className=" w-56 h-60 m-12 ">
      <figure className="relative w-full h-full">
        <img
          src={image}
          alt="headphones"
          className="relative rounded-lg w-full h-full object-contain"
          onClick={() => {
            handleOpenDetail();
            detailFilter(id);
          }}
        />
        <span className="absolute bottom-0 left-0 m-2 bg-black/60 text-xs text-white rounded-lg px-2">
          {category}
        </span>
        <button
          className="absolute right-2 top-2 rounded-full w-6 h-6 flex justify-center items-center font-semibold bg-black/60 text-xs text-white hover:scale-125"
          onClick={() => {
            handleCart({ title, price, image, category, id });
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
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </figure>
      <div className="flex justify-between items-cneter">
        <span className="font-light m-2">
          {title.split(" ").slice(0, 2).join(" ")}
        </span>
        <span className="font-bold m-2">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
