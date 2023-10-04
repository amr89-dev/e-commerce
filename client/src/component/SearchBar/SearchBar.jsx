import { useContext } from "react";
import Layout from "../Layout/Layout";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";

const SearchBar = () => {
  const cartContext = useContext(ShoppingCartContext);
  const productContext = useContext(ProductContext);
  const { shoppingCartIsOpen } = cartContext;
  const { handleInputSearch, detailIsOpen } = productContext;
  return (
    <Layout>
      <section className="w-full flex justify-center  ">
        <input
          className={`border border-gray-700 w-1/2 rounded-lg p-1 focus:shadow-2xl focus:outline-offset-1 ${
            detailIsOpen || shoppingCartIsOpen ? "blur pointer-events-none" : ""
          }`}
          type="search"
          placeholder="Buscar..."
          onChange={handleInputSearch}
        />
      </section>
    </Layout>
  );
};

export default SearchBar;
