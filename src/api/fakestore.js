const url = 'https://fakestoreapi.com'

export const getProductsByCategory = async(category) => {
  const response = await fetch(`${url}/products/category/${category}`);
  const json = await response.json();
  console.log(json)
  return json;
}