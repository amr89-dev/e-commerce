import { useContext } from "react";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/ProductCard/ProductCard";
import { ShoppingCartContext } from "../../context";
import { useLocation } from "react-router-dom";
import SearchBar from "../../component/SearchBar/SearchBar";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const { products, detailIsOpen, shoppingCartIsOpen, inputSearch } = context;
  const location = useLocation();

  let ruta = location.pathname.replace("/", "");
  const keySearch = {
    "ropa-hombre": "men's clothing",
    "ropa-mujer": "women's clothing",
    electronicos: "electronics",
    joyeria: "jewelery",
  };

  const productsByCategory = products.filter(
    (el) => el.category === keySearch[ruta]
  );

  const productsBySearch =
    productsByCategory.length <= 0
      ? products.filter((el) =>
          el.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
      : productsByCategory.filter((el) =>
          el.title.toLowerCase().includes(inputSearch.toLowerCase())
        );

  return (
    <Layout>
      <SearchBar />
      <div
        className={`flex flex-row flex-wrap gap-5 justify-center items-center ${
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