import Notiflix from 'notiflix';
import { postOrder } from "../services/API";

const refs = { // DOM elemanlarının tanımlanması - DOM elements declaration
  openModalBtn: document.querySelector('.shopping-link'),
  openModalBtnHero: document.querySelector('.btn-hero'),
  closeModalBtn: document.querySelector('.order-modal-close-btn'),
  backdrop: document.querySelector('.backdrop-order'),
  modal: document.querySelector('.modal-order'),
  forma: document.querySelector('.modal-form-order'),
};
try { // Tarif modalını açma - Open recipe modal
  refs.openModalBtnHero.addEventListener('click', openModalOpen);
} catch (error) {}

refs.openModalBtn.addEventListener('click', openModalOpen);
refs.closeModalBtn.addEventListener('click', closeModalClose);
refs.backdrop.addEventListener('click', clickBackdropClick);
refs.forma.addEventListener('submit', sendOrder);

async function sendOrder(e) { // Sipariş gönderme - Send order
  e.preventDefault();
  const { name, tel, email, comment } = e.currentTarget;
  const orderData = {
    name: name.value,
    phone: tel.value,
    email: email.value,
    comment: comment.value,
  };

  try {
    const result = await postOrder(orderData);

    Notiflix.Notify.success('Your order has been submitted!');
  } catch (error) {
    Notiflix.Notify.failure(error.response.data.message || 'Order has not been placed...');
  } finally {
    closeModalClose();
  }


}

function openModalOpen() { // Tarif penceresini açma - Open recipe modal
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('overflowHidden');
  refs.backdrop.classList.add('active');
  refs.modal.classList.add('active');
}

function closeModalClose() { // Tarif penceresini kapatma - Close recipe modal
  document.body.classList.remove('overflowHidden');
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('overflowHidden');
  refs.backdrop.classList.remove('active');
  refs.modal.classList.remove('active');
}

function clickBackdropClick(e) { // Tıklanıldığında tarif penceresini kapatma - Close recipe modal by click
  if (e.currentTarget === e.target) {
    closeModalClose();
  }
}

function onEscPress(e) { // ESC'ye basıldığında tarif penceresini kapatma - Close recipe modal by press ESC
  if (e.code === 'Escape') {
    closeModalClose();
  }
}