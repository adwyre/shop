const url = 'https://fakestoreapi.com'

export const getProductsByCategory = async(category) => {
  const response = await fetch(`${url}/products/category/${category}`);
  const json = await response.json();
  console.log(json)
  return json;
}

export const getProductById = async(id) => {
  const response = await fetch(`${url}/products/${id}`);
  const json = await response.json();
  console.log(json)
  return json;
}

export const getCart = async(userId) => {
  const response = await fetch(`${url}/carts/user/${userId}`);
  const json = await response.json();
  console.log(json)
  return json;
}

