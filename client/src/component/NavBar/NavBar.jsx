import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { ProductContext } from "../../contexts/productContext";
import { useAuth } from "../../hooks/useAuth";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";

const NavBar = () => {
  const { isAuthenticated } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const { detailIsOpen } = useContext(ProductContext);
  const { cartItems, shoppingCartIsOpen, handleOpenShoppingCart } =
    useContext(ShoppingCartContext);
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

  return (
    <nav
      className={`flex flex-row items-center max-w-screen-lg mx-auto p-2 justify-between h-16 relative ${
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
      <Link to="/" className="">
        <div className=" font-bold  text-2xl">Compri</div>
      </Link>
      <ul
        className={`${
          menuIsOpen
            ? "hidden"
            : "flex flex-col absolute top-16 left-0 w-full z-10 bg-white"
        }  md:visible md:flex md:static md:flex-row md:w-auto p-2  `}
      >
        {links.map((el, i) => (
          <NavLink
            key={i}
            to={el.to}
            onClick={toggleMenu}
            className={({ isActive, isPending }) =>
              isPending
                ? "mx-2"
                : isActive
                ? "mx-2 font-bold"
                : " hover:bg-black hover:text-white px-2 rounded-lg"
            }
          >
            {el.name}
          </NavLink>
        ))}
      </ul>
      <ul className="flex flex-row gap-1 justify-center items-center">
        {!isAuthenticated ? (
          <li className="px-2">
            <Link to="/login">Ingresar</Link>
          </li>
        ) : (
          <li className="px-2">
            <AvatarDropdown />
          </li>
        )}
        <li className="flex flex-row relative">
          <button onClick={handleOpenShoppingCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
          <span className=" text-xs text-center text-white absolute -right-1 -top-1 bg-black rounded-full h-4 w-4">
            {cartItems.length}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
