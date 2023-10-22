import { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useErrorLoading } from "../../hooks/useErrorLoading";
import Loader from "../../component/Loader/Loader";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { saveUser } = useAuth();
  const navigate = useNavigate();
  const { loading, error, setErrorState, setLoadingState } = useErrorLoading();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true);
    try {
      const res = await login(formData);
      if (res.accessToken && res.refreshToken) {
        saveUser(res);
        setFormData({
          email: "",
          password: "",
        });
        setLoadingState(false);
        navigate("/");
      }
    } catch (err) {
      setErrorState(err);
      setLoadingState(false);
      console.log(err);
      setTimeout(() => {
        setErrorState(null);
      }, 2000);
    }
  };
  return (
    <Layout>
      <h2 className="text-2xl text-center mt-4 mb-2 font-semibold text-gray-700 ">
        Inicie Sesión
      </h2>

      <form
        className=" w-96 max-w-lg mx-auto p-8  flex flex-col items-start shadow-xl rounded-lg "
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Correo electrónico:</label>
        <input
          value={formData.email}
          type="email"
          name="email"
          id="email"
          className="border border-black  rounded-md mb-2 p-1 w-full"
          onChange={(e) => {
            onChange(e);
          }}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          value={formData.password}
          type="password"
          name="password"
          id="password"
          className="border border-black  rounded-md mb-2 p-1 w-full"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {error ? (
          <p className="text-red-500 font-semibold">
            Usuario o contraseña incorrectos
          </p>
        ) : loading ? (
          <Loader mt={"8px"} ml={"0px"} />
        ) : (
          <button
            type="submit"
            disabled={formData.password === "" || formData.email === ""}
            className="bg-gray-700 rounded-lg p-1 mt-2 text-white hover:bg-gray-500 w-full disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed"
          >
            Iniciar Sesión
          </button>
        )}
      </form>
      <p className="mx-auto w-fit mt-4">
        <Link to="/sign-up">¿No tienes cuenta? Has click y Registrate</Link>
      </p>
    </Layout>
  );
};

export default SignIn;
