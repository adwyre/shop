const url = 'https://fakestoreapi.com'

export const getProductsByCategory = async(category) => {
  const response = await fetch(`${url}/products/category/${category}`);
  const json = await response.json();
  return json;
}

export const getProductById = async(id) => {
  const response = await fetch(`${url}/products/${id}`);
  const json = await response.json();
  return json;
}

export const getAllProducts = async() => {
  const response = await fetch(`${url}/products`);
  const json = await response.json();
  return json;
}

export const getAllUsers =  async() => {
  const response = await fetch(`${url}/users`);
  const json = await response.json();
  return json;
}

export const getUserById = async(id) => {
  const response = await fetch(`${url}/users/${id}`);
  const json = await response.json();
  return json;
}

export const getCart = async(userId) => {
  const response = await fetch(`${url}/carts/user/${userId}`);
  const json = await response.json();
  return json;
}

