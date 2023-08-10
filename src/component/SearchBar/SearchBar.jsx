import { useContext } from "react";
import Layout from "../Layout/Layout";
import { ShoppingCartContext } from "../../context";

const SearchBar = () => {
  const context = useContext(ShoppingCartContext);
  const { handleInputSearch } = context;
  return (
    <Layout>
      <section className="w-full flex justify-center  ">
        <input
          className=" border border-gray-700 w-1/2 rounded-lg p-1 focus:shadow-2xl focus:outline-offset-1"
          type="search"
          placeholder="Buscar..."
          onChange={handleInputSearch}
        />
      </section>
    </Layout>
  );
};

export default SearchBar;
