import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const links = [
    { to: "/", name: "Todos" },
    { to: "/ropa", name: "Ropa" },
    { to: "/electronicos", name: "Electronicos" },
    { to: "/jueguetes", name: "Juguetes" },
    { to: "/muebles", name: "Muebles" },
    { to: "/otros", name: "Otros" },
  ];

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const navStyles = {
    isActive: "mx-2 font-bold ",
    pending: "mx-2",
  };

  return (
    <nav className="flex flex-row items-center max-w-screen-lg mx-auto p-2 justify-between h-16  ">
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

      <div className=" font-bold  text-2xl">Compri</div>
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
      <ul>
        <Link to="/cart">🛒</Link>
        <Link to="/account">👤</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
