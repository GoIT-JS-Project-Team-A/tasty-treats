import axios from 'axios';
const API_URL =  'https://tasty-treats-backend.p.goit.global/api';

export async function findMainClasses() {
    const url = `${API_URL}/events`;
    const response = await axios.get(url);
    return response.data;
};

export async function fetchCategories() {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    }
    catch (error) {
        console.log("Kategorileri alırken bir hata oluştu \nError happened while fetching categories:", error);
        return [];
    }
};

export async function fetchRecipes(id) {
    const url = `${API_URL}/recipes/${id}`;
    const response = await axios.get(url);
    return response.data;
};

export async function fetchPopularRecipes() { 
    try {
        const response = await axios.get(`${API_URL}/recipes/popular`);
        return response.data;
    }
    catch (error) {
        console.log("Popüler tarifleri alırken bir hata oluştu \nError happened while fetching popular recipes:", error);
        return [];
    }
};

export async function fetchRecipesByArea() {
    const url = `${API_URL}/recipes/areas`;
    const response = await axios.get(url);
    return response.data;
};

export async function fetchRecipesByIngredients() {
    const url = `${API_URL}/recipes/ingredients`;
    const response = await axios.get(url);
    return response.data;
};

export async function patchRating(id, data) {
    const url = `${API_URL}/recipes/${id}/rating`;
    return await axios.patch(url, data);
};

export async function postOrder(data) {
    return axios.post(`${API_URL}/orders/add`, data);
};

