export const validationForm = (formData) => {
  let errors = {};
  if (!formData.firstName) {
    errors.firstName = "El nombre es requerido";
    return errors;
  }
  if (!formData.lastName) {
    errors.lastName = "El apellido es requerido";
    return errors;
  }
  if (!formData.email) {
    errors.email = "El email es requerido";
    return errors;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "El email es inválido";
    return errors;
  }
  if (!formData.password) {
    errors.password = "La contraseña es requerida";
    return errors;
  } else if (formData.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
    return errors;
  }

  if (!formData.phone) {
    errors.phone = "El teléfono es requerido";
    return errors;
  }
  return errors;
};
