/*eslint-disable */
const ProductCard = ({ productData }) => {
  const { title, price, image, category } = productData;
  return (
    <div className=" max-w-[200px] max-h-[150px] m-12">
      <figure className="relative">
        <img
          src={image}
          alt="headphones"
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="absolute bottom-0 left-0 m-2 bg-white/60 text-xs rounded-lg px-2">
          {category}
        </span>
        <button className="absolute right-2 top-2 rounded-full w-6 h-6 flex justify-center items-center font-semibold bg-white/60">
          +
        </button>
      </figure>
      <div className="flex justify-between items-cneter">
        <span className="font-light m-2">{title}</span>
        <span className="font-bold m-2">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
