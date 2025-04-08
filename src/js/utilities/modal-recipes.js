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

// Açılır pencere - Modal
export function OpenModal(currentBtn) { 
  closeModalBtn.addEventListener('click', CloseModal);
  backdropModal.addEventListener('click', CloseOnClick);
  giveRatingBtn.addEventListener('click', OpenRateModal);
  window.addEventListener('keydown', CloseOnBtnClick);

  backdropModal.classList.remove('is-hidden-modal');
  mainModalRecipes.classList.remove('is-hidden-modal');
  rateForm.dataset.id = currentBtn.dataset.id;
  genereteRecipe(currentBtn.dataset.id);
  ToggleScroll();

  const storage = localStorage.getItem('favorites');
  const data = JSON.parse(storage);

  if (storage) {
    if (data.find(el => el.id === currentBtn.dataset.id)) {
      saveRecipeBtn.textContent = 'Remove favorite';
    } else {
      saveRecipeBtn.textContent = 'Add to favorite';
    }
  }

  saveRecipeBtn.addEventListener('click', AddToFav);
}

// Puanlama penceresinin açılışı - Opening rating modal
function OpenRateModal() {
  mainModalRecipes.classList.add('is-hidden-modal');
  rateModal.classList.remove('is-hidden-modal');

  closeRate.addEventListener('click', CloseRateModal); 
  modalRateList.addEventListener('click', GiveRate); 
  rateEmail.addEventListener('input', checkRateInputs); 
  rateForm.addEventListener('submit', SubmitRate); 
}

// Puanlama - Rating
function GiveRate(e) {
  const target = e.target.closest('.modal-rating-star-item');

  if (target) {
    const rate = [...e.currentTarget.children].indexOf(target) + 1;
    [...e.currentTarget.children].forEach((el, i) =>
      i <= rate - 1
        ? el.classList.add('is-rated')
        : el.classList.remove('is-rated')
    );
    rateVal.textContent = rate.toFixed(1);
    rateRage.value = rate;
  }
}

// E-posta giriş kontrolü - Email input control
function isValidEmail(email) { 
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function checkRateInputs() {
  if (!isValidEmail(rateEmail.value)) {
    rateEmail.style.borderColor = '#b83245';
    sendRateBtn.disabled = true;
  } else {
    rateEmail.style.borderColor = '#9bb537';
    sendRateBtn.disabled = false;
  }
}

// Puanlama gönderme - Submit rating
async function SubmitRate(e) {
  e.preventDefault();
  const data = {
    rate: Number(e.target.elements['raiting-star'].value),
    email: e.target.elements['email'].value,
  };
  const id = rateForm.dataset.id;

  try {
    await patchRating(id, data);
    Notiflix.Notify.success('Tarifimizi beğendiğiniz için teşekkür ederim. \nThank you for appreciating the recipe.');
  } catch (error) {
    Notiflix.Notify.failure(error.response.data.message || 'Puanlama sırasında hata! \nRating has not been submited...');
  }

  CloseModal();
}

// Varsayılana dönme - Reset
function restoreForm() {
  [...modalRateList.children].forEach(el =>
    el.classList.remove('is-rated')
  );

  rateEmail.style.borderColor = '';
  sendRateBtn.disabled = true;
  rateVal.textContent = '0.0';
  rateForm.dataset.id = '';
  rateForm.reset();
}

// Puanlama penceresini kapatma - Close rating modal
function CloseRateModal() {
  mainModalRecipes.classList.remove('is-hidden-modal');
  rateModal.classList.add('is-hidden-modal');

  closeRate.removeEventListener('click', CloseRateModal); 
  modalRateList.addEventListener('click', GiveRate); 
  rateEmail.addEventListener('input', checkRateInputs); 
  rateForm.addEventListener('submit', SubmitRate); 
}
