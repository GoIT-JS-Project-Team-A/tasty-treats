import { fetchRecipes, patchRating } from '../service/API';
import { measureRating } from '../renders/renders';
import { ratingScale } from '../renders/renders';
import SmoothScrollbar from 'smooth-scrollbar';
import Notiflix from 'notiflix';
import { patchRating } from '../service/API';

// DOM öğelerinin tanımlanması - DOM elements declaration
closeModalBtn = document.querySelector('.close-modal');
backdropModal = document.querySelector('.backdrop-recipes');
mainModalRecipes = document.querySelector('.modal-recipes');
modalRecipes = document.querySelector('.modal-recipes-js');
backdropModal = document.querySelector('.backdrop-recipes');
saveRecipeBtn = document.querySelector('.save-recipes-btn');
giveRatingBtn = document.querySelector('.give-rating-btn');
rateModal = document.querySelector('.modal-rating');
closeRate = document.querySelector('.close-rating-modal');
modalRateList = document.querySelector('.modal-rating-list');
rateVal = document.querySelector('.modal-rating-span');
rateRage = document.querySelector('.rating-range-input');
rateEmail = document.querySelector('.rating-email-input');
rateForm = document.querySelector('.modal-rating-form');
sendRateBtn = document.querySelector('.modal-rating-send-btn');