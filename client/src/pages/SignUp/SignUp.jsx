import { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { createUser } from "../../services/api";
import { validationForm } from "../../utils/validationForm";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors(
      validationForm({
        ...formData,
        [name]: value,
      })
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUser(formData);

    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  return (
    <Layout>
      <h2 className="text-2xl text-center mt-4 mb-2 font-semibold text-gray-700 ">
        Registro de Usuario
      </h2>
      <form
        className=" w-96 max-w-lg mx-auto p-8  flex flex-col shadow-xl rounded-lg "
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-black p-1 px-2  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-black p-1 px-2  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="border border-black p-1 px-2  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="border border-black p-1 px-2  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        <label htmlFor="phone">Telefono:</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          className="border border-black p-1 px-2  rounded-md mb-2"
          onChange={(e) => {
            onChange(e);
          }}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        <button
          type="submit"
          className="bg-gray-700 rounded-lg p-1 mt-2 text-white hover:bg-gray-500s disabled:bg-neutral-300 disabled:cursor-not-allowed"
          disabled={Object.keys(errors).length > 0 || !formData.email}
        >
          Registrar
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;
