import { useContext } from "react";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/ProductCard/ProductCard";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";
import { useLocation } from "react-router-dom";
import SearchBar from "../../component/SearchBar/SearchBar";

const Home = () => {
  const cartContext = useContext(ShoppingCartContext);
  const productContext = useContext(ProductContext);
  const { products, detailIsOpen, inputSearch } = productContext;
  const { shoppingCartIsOpen } = cartContext;
  const location = useLocation();

  let ruta = location.pathname.replace("/", "");

  const productsByCategory = products.filter(
    (el) => el.categories.name === ruta
  );

  const productsBySearch =
    productsByCategory.length <= 0
      ? products.filter((el) =>
          el.name.toLowerCase().includes(inputSearch.toLowerCase())
        )
      : productsByCategory.filter((el) =>
          el.name.toLowerCase().includes(inputSearch.toLowerCase())
        );

  return (
    <Layout>
      <SearchBar />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start ${
          detailIsOpen || shoppingCartIsOpen ? "blur pointer-events-none" : ""
        } `}
      >
        {productsBySearch.map((el) => (
          <ProductCard key={el.id} productData={el} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
