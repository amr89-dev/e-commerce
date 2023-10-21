import { useContext } from "react";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/ProductCard/ProductCard";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";
import { useLocation } from "react-router-dom";
import SearchBar from "../../component/SearchBar/SearchBar";
import { useErrorLoading } from "../../hooks/useErrorLoading";

const Home = () => {
  const cartContext = useContext(ShoppingCartContext);
  const productContext = useContext(ProductContext);
  const { products, detailIsOpen, inputSearch } = productContext;
  const { shoppingCartIsOpen } = cartContext;
  const location = useLocation();
  const { error, loading } = useErrorLoading();

  let ruta = location.pathname.replace("/", "");

  const productsByCategory = products.filter((el) => {
    return el.categories.name === ruta;
  });
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

      {error && (
        <p className="mt-[100px]   text-3xl font-bold">{`Ops! Ocurrió un error al cargar los productos ...`}</p>
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start ${
          detailIsOpen || shoppingCartIsOpen ? "blur pointer-events-none" : ""
        } `}
      >
        {loading
          ? new Array(10).fill("").map((el, i) => {
              return (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 rounded-lg w-[224px] h-[336px] m-4"
                ></div>
              );
            })
          : productsBySearch.map((el) => (
              <ProductCard key={el.id} productData={el} />
            ))}
      </div>
    </Layout>
  );
};

export default Home;
