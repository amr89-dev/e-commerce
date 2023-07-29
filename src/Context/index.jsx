import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

//eslint-disable-next-line
const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [productDetail, setProductDetail] = useState([]);

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
  const handleOpenDetail = (flag) => {
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

  const detailFilter = (id) => {
    const data = products.filter((el) => el.id === id);
    setProductDetail(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const data = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    detailIsOpen,
    handleOpenDetail,
    detailFilter,
    productDetail,
  };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
