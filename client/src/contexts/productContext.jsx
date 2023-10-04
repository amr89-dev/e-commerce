import { createContext, useState, useEffect, useContext } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext();
//eslint-disable-next-line
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [productDetail, setProductDetail] = useState([]);

  const [inputSearch, serInputSeach] = useState("");

  const loadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const handleOpenProductDetail = (flag) => {
    if (flag) {
      setDetailIsOpen(false);
      setProductDetail([]);
      return;
    }
    if (productDetail.length >= 1 && detailIsOpen) {
      setDetailIsOpen(true);
    } else if (!detailIsOpen) {
      setDetailIsOpen(true);
    }
  };
  const productDetailFilter = (id) => {
    const data = products.filter((el) => el.id === id);
    setProductDetail(data);
  };

  const handleInputSearch = (e) => {
    serInputSeach(e.target.value);
  };

  useEffect(() => {
    loadProducts();
  }, []);
  const data = {
    products,
    inputSearch,
    detailIsOpen,
    productDetail,
    handleOpenProductDetail,
    productDetailFilter,
    handleInputSearch,
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
