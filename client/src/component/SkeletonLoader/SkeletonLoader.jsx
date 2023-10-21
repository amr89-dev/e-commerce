import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";
//eslint-disable-next-line
const ProductCard = ({ productData }) => {
  const cartContext = useContext(ShoppingCartContext);
  const productContext = useContext(ProductContext);
  const { handleOpenProductDetail, productDetailFilter } = productContext;
  const { addItemToCart, handleOpenShoppingCart } = cartContext;
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className=" m-4">
      {isLoading ? (
        <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
      ) : (
        <figure className="relative w-full h-full">
          <img
            src={images[0]}
            alt="headphones"
            className="relative rounded-lg w-full h-full object-contain"
            onClick={() => {
              handleOpenProductDetail();
              productDetailFilter(id);
            }}
          />
          <span className="absolute bottom-0 left-0 m-2 bg-black/60 text-xs text-white rounded-lg px-2">
            {categories.name.slice(0, findHyphen)}
          </span>
          <button
            className="absolute top-0 right-0 m-2 bg-white/60 text-white rounded-lg px-2"
            onClick={() => addItemToCart(productData)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <figcaption className="absolute bottom-0 left-0 w-full bg-white/60 text-xs text-gray-700 rounded-b-lg px-2 py-1">
            <div className="flex justify-between items-center">
              <span>{name}</span>
              <span>{priceFormat(price)}</span>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default ProductCard;
