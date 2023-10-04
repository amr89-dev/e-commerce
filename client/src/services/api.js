export const API_URL = "http://localhost:3001";

export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/products`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
export const createUser = async (data) => {
  const customer = {
    ...data,
    user: {
      email: data.email,
      password: data.password,
      role: "customer",
    },
  };
  delete customer.password;
  delete customer.email;

  try {
    const res = await fetch(`${API_URL}/api/v1/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
