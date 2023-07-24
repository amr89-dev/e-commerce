import { useEffect, useState } from "react";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      setProducts(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {products.map((el) => (
          <ProductCard key={el.id} productData={el} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
