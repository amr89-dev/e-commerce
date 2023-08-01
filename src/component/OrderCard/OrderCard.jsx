import { Link } from "react-router-dom";

const OrderCard = ({ id }) => {
  return (
    <div className="w-1/2 border h-auto border-black rounded-lg mb-4">
      <Link to={`/orders/${id}`}>
        <img src="" alt="item" className="w-10 h-10 object-contain mr-2" />

        <div>
          <p className="text-sm">titulo</p>
          <div className="flex flex-row">
            <button>-</button>
            <div>cantidad</div>
            <button>+</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OrderCard;
