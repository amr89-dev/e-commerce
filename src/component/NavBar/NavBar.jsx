import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { to: "/", name: "Todos" },
    { to: "/ropa", name: "Ropa" },
    { to: "/electronicos", name: "Electronicos" },
    { to: "/jueguetes", name: "Juguetes" },
    { to: "/muebles", name: "Muebles" },
    { to: "/otros", name: "Otros" },
  ];

  return (
    <nav className="flex flex-row items-center max-w-screen-lg mx-auto p-2 justify-between h-16  ">
      <div>Shopi</div>
      <ul className="flex flex-col absolute md:static md:flex-row top-16 left-0 w-full md:w-auto p-2 bg-red-500">
        {links.map((el, i) => (
          <NavLink key={i} to={el.to}>
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
