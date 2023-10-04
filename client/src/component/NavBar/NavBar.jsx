import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const productContext = useContext(ProductContext);
  const cartContext = useContext(ShoppingCartContext);
  const { detailIsOpen } = productContext;
  const { cartItems, shoppingCartIsOpen } = cartContext;
  const links = [
    { to: "/", name: "Todos" },
    { to: "/ropa-hombre", name: " Ropa Hombre" },
    { to: "/ropa-mujer", name: "Ropa Mujer" },
    { to: "/zapatos-hombre", name: "Zapatos Hombre" },
    { to: "/zapatos-mujer", name: "Zapatos Mujer" },
    { to: "/accesorios", name: "Accesorios" },
  ];

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const navStyles = {
    isActive: "mx-2 font-bold ",
    pending: "mx-2",
  };

  return (
    <nav
      className={`flex flex-row items-center max-w-screen-lg mx-auto p-2 justify-between h-16 ${
        detailIsOpen || shoppingCartIsOpen ? "blur pointer-events-none" : ""
      } `}
    >
      {!menuIsOpen ? (
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      <Link to="/">
        <div className=" font-bold  text-2xl">Compri</div>
      </Link>
      <ul
        className={`${
          menuIsOpen ? "hidden" : "flex flex-col absolute top-16 left-0 w-full"
        }  md:visible md:flex md:static md:flex-row md:w-auto p-2  `}
      >
        {links.map((el, i) => (
          <NavLink
            key={i}
            to={el.to}
            className={({ isActive }) =>
              isActive ? navStyles.isActive : navStyles.pending
            }
          >
            {el.name}
          </NavLink>
        ))}
      </ul>
      <ul className="flex flex-row gap-1">
        <li>
          <Link to="/login">Ingresar</Link>
        </li>
        <li className="flex flex-row">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
          <span className=" text-xs  -m-1">{cartItems.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
