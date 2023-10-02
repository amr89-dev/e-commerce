import { useContext } from "react";
import { ShoppingCartContext } from "../../context/index";
/*eslint-disable */
const ProductCard = ({ productData }) => {
  const context = useContext(ShoppingCartContext);
  const {
    addItemToCart,
    handleOpenDetail,
    detailFilter,
    handleOpenShoppingCart,
  } = context;
  const { name, price, images, categories, id } = productData;
  const findHyphen =
    categories.name.indexOf("-") === -1
      ? categories.name.length
      : categories.name.indexOf("-");
  const priceFormat = (price) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumSignificantDigits: 3,
    }).format(price);

  return (
    <div className=" m-4">
      <figure className="relative w-full h-full">
        <img
          src={images[0]}
          alt="headphones"
          className="relative rounded-lg w-full h-full object-contain"
          onClick={() => {
            handleOpenDetail();
            detailFilter(id);
          }}
        />
        <span className="absolute bottom-0 left-0 m-2 bg-black/60 text-xs text-white rounded-lg px-2">
          {categories.name.slice(0, findHyphen)}
        </span>
        <button
          className="absolute right-2 top-2 rounded-full w-6 h-6 flex justify-center items-center font-semibold bg-black/60 text-xs text-white hover:scale-125"
          onClick={() => {
            addItemToCart(id);
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
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </figure>
      <div className="flex justify-between items-center">
        <span className="font-light m-2">{name}</span>
        <span className="font-bold m-2">{priceFormat(price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
