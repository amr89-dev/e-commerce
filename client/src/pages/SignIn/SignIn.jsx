import { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setFormData({});
  };
  return (
    <Layout>
      <h2 className="text-2xl text-center mt-4 mb-2 font-semibold text-gray-700 ">
        Inicie Sesión
      </h2>
      <form
        className=" max-w-lg mx-auto p-8  flex flex-col shadow-xl rounded-lg "
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

        <button
          type="submit"
          className="bg-gray-700 rounded-lg p-1 mt-2 text-white hover:bg-gray-500s"
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="mx-auto w-fit mt-4">
        <Link to="/sign-up">¿No tienes cuenta? Has click y Registrate</Link>
      </p>
    </Layout>
  );
};

export default SignIn;
