import { useContext, useState } from "react";
import Layout from "../../component/Layout/Layout";
import { ShoppingCartContext } from "../../context";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const context = useContext(ShoppingCartContext);
  const { createUser } = context;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
  };
  return (
    <Layout>
      <h2 className="text-2xl text-center my-4 font-semibold text-gray-700 ">
        Inicie Sesión
      </h2>
      <form
        className=" max-w-2xl mx-auto p-8  flex flex-col shadow-xl rounded-lg "
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-black  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-black  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />

        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="border border-black  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />

        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="border border-black  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />

        <label htmlFor="phone">Telefono:</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          className="border border-black  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        <button
          type="submit"
          className="bg-gray-700 rounded-lg p-1 mt-2 text-white hover:bg-gray-500s"
        >
          Registrar
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;