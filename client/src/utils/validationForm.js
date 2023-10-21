export const validationForm = (formData) => {
  let errors = {};
  if (!formData.firstName) {
    errors.firstName = "El nombre es requerido";
  }
  if (!formData.lastName) {
    errors.lastName = "El apellido es requerido";
  }
  if (!formData.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "El email es inválido";
  }
  if (!formData.password) {
    errors.password = "La contraseña es requerida";
  } else if (formData.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  }

  if (!formData.phone) {
    errors.phone = "El teléfono es requerido";
  }
  return errors;
};
