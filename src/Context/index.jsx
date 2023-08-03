import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

//eslint-disable-next-line
const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const [productDetail, setProductDetail] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  let productsToRender = useState(cartItems);

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
  const addItemToCart = (id) => {
    const newItem = products.find((el) => el.id === id);

    const itemExist = cartItems.find((el) => el.id === newItem.id);

    itemExist
      ? setCartItems(
          cartItems.map((el) =>
            el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
          )
        )
      : setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
  };
  const delItemFromCart = (id, all = false) => {
    if (all) {
      setCartItems(cartItems.filter((el) => el.id !== id));
    }

    const itemToDelete = cartItems.find((el) => el.id === id);

    itemToDelete.quantity > 1
      ? setCartItems(
          cartItems.map((el) =>
            el.id === id ? { ...el, quantity: el.quantity - 1 } : el
          )
        )
      : setCartItems(cartItems.filter((el) => el.id !== id));
  };

  const handleOpenShoppingCart = (flag) => {
    if (flag) {
      setShoppingCartIsOpen(true);
    }
    if (!flag && flag !== undefined) {
      setShoppingCartIsOpen(false);
    }

    setShoppingCartIsOpen(!shoppingCartIsOpen);
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

  const handleOrders = () => {
    const newOrder = {
      id: orders.length,
      date: new Date().toLocaleDateString(),
      products: [...cartItems],
      totalPrice: cartItems.reduce((acc, el) => {
        const sub = el.quantity * el.price;
        return sub + acc;
      }, 0),
    };
    setOrders([...orders, newOrder]);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const data = {
    products,
    setProducts,
    cartItems,
    addItemToCart,
    delItemFromCart,
    detailIsOpen,
    handleOpenDetail,
    shoppingCartIsOpen,
    handleOpenShoppingCart,
    detailFilter,
    productDetail,
    orders,
    handleOrders,
    productsToRender,
    setCartItems,
    filteredItems,
    setFilteredItems,
  };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
