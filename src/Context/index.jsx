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
  const addItemToCart = (item) => {
    const itemExist = cartItems.find((el) => el.id === item.id);

    itemExist
      ? setCartItems(
          cartItems.map((el) =>
            el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
          )
        )
      : setCartItems([...cartItems, { ...item, quantity: 1 }]);
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
    addItemToCart,
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
