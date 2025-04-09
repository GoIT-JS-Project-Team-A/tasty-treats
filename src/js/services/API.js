import axios from 'axios';

const API_URL = 'https://tasty-treats-backend.p.goit.global/api';

export async function findMasterClasses() { // Ana Sınıflarını alır - Fetch main classes
  const url = `${API_URL}/events`;
  const res = await axios.get(url);
  return res.data;
}

export async function fetchCategories() { // Kategorileri alır - Fetch categories
  try {
    const response = await axios.get(
      `${API_URL}/categories`
    );
    return response.data;
  } catch (error) {
    console.error('Kategoriler alınırken hata oluştu / Error while fetching categories:', error);
    return [];
  }
}

export async function findRecipes(id) { // Tarifleri alır - Fetch recipes
  const url = `${API_URL}/recipes/${id}`;
  const res = await axios.get(url);
  return res.data;
}


export const getPopularRecipes = async function () { // Populer tarifleri alır - Fetch popular recipes
  try {
    const response = await axios.get( `${API_URL}/recipes/popular`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function fetchAreaRecipes() { // Ülkelere göre tarifleri alır - Fetch recipes by area
  const url = `${API_URL}/areas`;
  const res = await axios.get(url);
  return res.data;
}

export async function fetchIngredientsRecipes() { // Malzemelere göre tarifleri alır - Fetch recipes by ingredients
  const url = `${API_URL}/ingredients`;
  const res = await axios.get(url);
  return res.data;
}

export async function patchRating(id, data) { // Puanlama gönderme - Submit rating
  const url = `${API_URL}/recipes/${id}/rating`;
  return await axios.patch(url, data);
}

export function postOrder(data) { // Sipariş oluşturma - Create order
  return axios.post(`${API_URL}/orders/add`, data);
}