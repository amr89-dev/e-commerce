import { useContext } from "react";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/ProductCard/ProductCard";
import { ShoppingCartContext } from "../../context";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const { products, detailIsOpen, shoppingCartIsOpen } = context;
  return (
    <Layout>
      <div
        className={`flex flex-row flex-wrap gap-5 justify-center items-center ${
          detailIsOpen || shoppingCartIsOpen ? "blur pointer-events-none" : ""
        } `}
      >
        {products.map((el) => (
          <ProductCard key={el.id} productData={el} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
