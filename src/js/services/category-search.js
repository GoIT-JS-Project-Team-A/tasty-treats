import axios from 'axios';

const API_URL_recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes';

function resizePage() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
        return 'per_page=9&limit=9';
    } else if (windowWidth >= 768 && windowWidth < 1280) {
        return 'per_page=8&limit=8';
    } else if (windowWidth < 768) {
        return 'per_page=6&limit=6';
    }
};

export async function fetchRecipesByTitle(search, page, time = "", area = "", ingredients = "") { 
    const url = `${API_URL_recipes}?title=${search}&page=${page}&${resizePage()}&time=${time}&area=${area}&ingredient=${ingredient}`;
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) { 
        console.log("Tarifleri alırken bir hata oluştu \nError happened while fetching recipes:", error);
    }
};

export async function fetchRecipesByCategory(search, page) {
    const url = `${API_URL_recipes}?category=${search}&page=${page}&${resizePage()}`;
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        console.log("Tarifleri alırken bir hata oluştu \nError happened while fetching recipes:", error);
    }
};
