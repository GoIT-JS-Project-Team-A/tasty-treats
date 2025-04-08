import{a as p,P as _,N as b,S as $,e as C,b as V}from"./vendor-CCpN9amw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const f="https://tasty-treats-backend.p.goit.global/api";async function ye(){try{return(await p.get(`${f}/categories`)).data}catch(e){return console.error("Помилка під час отримання категорій:",e),[]}}async function U(e){const t=`${f}/recipes/${e}`;return(await p.get(t)).data}const he=async function(){try{return(await p.get(`${f}/recipes/popular`)).data}catch(e){throw e}};async function be(){const e=`${f}/areas`;return(await p.get(e)).data}async function Le(){const e=`${f}/ingredients`;return(await p.get(e)).data}async function G(e,t){const n=`${f}/recipes/${e}/rating`;return await p.patch(n,t)}function K(e){return p.post(`${f}/orders/add`,e)}function X(){const e=window.innerWidth;if(e<768)return 2;if(e>=768)return 3}function Y(e,t,n,a){const o={totalItems:Number(t)*Number(n),itemsPerPage:Number(t),visiblePages:X(),page:Number(e),centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new _("pagination",o).on("afterMove",({page:r})=>{a(r)})}const v="/tasty-treats/assets/icons-BeXmI9hm.svg";function y(e,t){return e<=t?"rate-item-active":"rate-item"}function x(e){return`<ul class='rate-list'>
             <li class=${y(1,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${v}#star'></use>
              </svg>
            </li>
            <li class=${y(2,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${v}#star'></use>
              </svg>
            </li>
            <li class=${y(3,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${v}#star'></use>
              </svg>
            </li>
            <li class=${y(4,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${v}#star'></use>
              </svg>
            </li>
            <li class=${y(5,e)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${v}#star'></use>
              </svg>
            </li>
          </ul>`}function z(e,t,n,a,o,i){const r={title:e,description:t.replace("'",""),preview:n,rating:a,id:o,category:i},m=a>5?5 .toFixed(1):a.toFixed(1);return`<div data-category='${i}' class='recipe-item animate__animated animate__fadeIn' 
                style='
                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),
                      rgba(5, 5, 5, 0)),
                      url(${n}); 
                      background-position: center;
                      background-size: cover;'>

                  <div class='inter-box'>

                    <button type='button' 
                    class='favorite-btn ${checkOnFavor(o)}'
                    data-info='${JSON.stringify(r)}'
                    name='favorite'>
                      <svg class='heart-icon' width='22' height='22'>
                          <use href='${v}#heart'></use>
                        </svg>
                    </button> 

                    <h2 class='title-item overflow-ellipsis'>${e}</h2>
                    <p class='title-descr ellipsis-multiline'>${t}</p>

                    <div class='rate-details-box'>
                    <p class='rate'>${m}</p>
                    ${x(m)}
                    <button type='button' name='details' class='button item-rec' data-id=${o}>See recipe</button>
                    </div>
                  </div>
                </div>`}const s={closeModalBtn:document.querySelector(".close-modal"),backdropModal:document.querySelector(".backdrop-recipes"),mainModalRecipes:document.querySelector(".modal-recipes"),modalRecipes:document.querySelector(".modal-recipes-js"),backdropModal:document.querySelector(".backdrop-recipes"),saveRecipeBtn:document.querySelector(".save-recipes-btn"),giveRatingBtn:document.querySelector(".give-rating-btn"),rateModal:document.querySelector(".modal-rating"),closeRate:document.querySelector(".close-rating-modal"),modalRateList:document.querySelector(".modal-rating-list"),rateVal:document.querySelector(".modal-rating-span"),rateRage:document.querySelector(".rating-range-input"),rateEmail:document.querySelector(".rating-email-input"),rateForm:document.querySelector(".modal-rating-form"),sendRateBtn:document.querySelector(".modal-rating-send-btn")};function Q(e){s.closeModalBtn.addEventListener("click",h),s.backdropModal.addEventListener("click",N),s.giveRatingBtn.addEventListener("click",q),window.addEventListener("keydown",I),s.backdropModal.classList.remove("is-hidden-modal"),s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateForm.dataset.id=e.dataset.id,te(e.dataset.id),A();const t=localStorage.getItem("favorites"),n=JSON.parse(t);t&&(n.find(a=>a.id===e.dataset.id)?s.saveRecipeBtn.textContent="Remove favorite":s.saveRecipeBtn.textContent="Add to favorite"),s.saveRecipeBtn.addEventListener("click",T)}function q(){s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.remove("is-hidden-modal"),s.closeRate.addEventListener("click",B),s.modalRateList.addEventListener("click",M),s.rateEmail.addEventListener("input",E),s.rateForm.addEventListener("submit",w)}function M(e){const t=e.target.closest(".modal-rating-star-item");if(t){const n=[...e.currentTarget.children].indexOf(t)+1;[...e.currentTarget.children].forEach((a,o)=>o<=n-1?a.classList.add("is-rated"):a.classList.remove("is-rated")),s.rateVal.textContent=n.toFixed(1),s.rateRage.value=n}}function Z(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function E(){Z(s.rateEmail.value)?(s.rateEmail.style.borderColor="#9bb537",s.sendRateBtn.disabled=!1):(s.rateEmail.style.borderColor="#b83245",s.sendRateBtn.disabled=!0)}async function w(e){e.preventDefault();const t={rate:Number(e.target.elements["raiting-star"].value),email:e.target.elements.email.value},n=s.rateForm.dataset.id;try{await G(n,t),b.Notify.success("Thank you for appreciating the recipe.")}catch(a){b.Notify.failure(a.response.data.message||"Rating has not been submited...")}h()}function ee(){[...s.modalRateList.children].forEach(e=>e.classList.remove("is-rated")),s.rateEmail.style.borderColor="",s.sendRateBtn.disabled=!0,s.rateVal.textContent="0.0",s.rateForm.dataset.id="",s.rateForm.reset()}function B(){s.mainModalRecipes.classList.remove("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.closeRate.removeEventListener("click",B),s.modalRateList.addEventListener("click",M),s.rateEmail.addEventListener("input",E),s.rateForm.addEventListener("submit",w)}function h(){ie(),ee(),s.backdropModal.classList.add("is-hidden-modal"),s.mainModalRecipes.classList.add("is-hidden-modal"),s.rateModal.classList.add("is-hidden-modal"),s.modalRecipes.innerHTML="",A()}function N({currentTarget:e,target:t}){e===t&&h()}function I(e){e.key==="Escape"&&h()}async function te(e){try{const t=await U(e),{title:n,description:a,preview:o,rating:i,_id:r,category:m}=t,l={title:n,description:a,preview:o,rating:i,id:r,category:m};s.modalRecipes.dataset.info=`${JSON.stringify(l)}`,ne(ae(t)),se()}catch(t){console.error(t)}}function ae(e){const t=e.ingredients,n=e.youtube?e.youtube.replace("watch?v=","embed/"):e.thumb,a=e.tags;let o="";if(a[0])for(let l=0;l<a.length;l++)o+=`<li class="recipe-tag">#${a[l]}</li>`;let i="";for(let l=0;l<t.length;l++)i+=`<li class="recipe-ingridient">${t[l].name} <span class="recipe-ps">${t[l].measure}</span></li>`;const r=e.rating>5?5 .toFixed(1):e.rating.toFixed(1);return`<div class="recipe-parts">
    ${oe(n,e.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${e.title}</h2>
      <div class="rating-part">
        <p class='rate'>${r}</p>
      ${x(r)}
        <p class="recipe-time">${e.time} min</p>
      </div>
      <ul class="ingridients">
        ${i}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${o}
  </ul>
  <p class="recipe-instr">${e.instructions}</p>
  </div>
`}function se(){const e=document.querySelector(".recipe-instr");$.init(e,{alwaysShowTracks:!0});const t=document.querySelector(".ingridients");$.init(t,{alwaysShowTracks:!0})}function ne(e){s.modalRecipes.insertAdjacentHTML("afterbegin",e)}function A(){document.querySelector("body").classList.toggle("overflow-hidden")}function oe(e,t){return e.endsWith(".jpg")?`<img class="modal-img" src="${e}" alt="${t}">`:`<iframe
      class="recipe-frame"
      src="${e}"
      frameborder="0"
      alt="${t}"
    ></iframe>`}function T({target:e}){const t=localStorage.getItem("favorites"),n=JSON.parse(t),a=JSON.parse(s.modalRecipes.dataset.info);t?n.find(o=>o.id===a.id)?(localStorage.setItem("favorites",JSON.stringify([...n.filter(o=>o.id!==a.id)])),e.textContent="Add to favorite"):(localStorage.setItem("favorites",JSON.stringify([...n,a])),e.textContent="Remove favorite"):(localStorage.setItem("favorites",JSON.stringify([a])),e.textContent="Remove favorite")}function ie(){s.closeModalBtn.removeEventListener("click",h),s.backdropModal.removeEventListener("click",N),s.saveRecipeBtn.removeEventListener("click",T),s.giveRatingBtn.removeEventListener("click",q),s.closeRate.removeEventListener("click",B),s.modalRateList.removeEventListener("click",M),s.rateEmail.removeEventListener("input",E),s.rateForm.removeEventListener("submit",w),window.removeEventListener("keydown",I)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),(o?C:V)(document.body)};t.addEventListener("click",a),n.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),C(document.body))})})();const u={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{u.openModalBtnHero.addEventListener("click",F)}catch{}u.openModalBtn.addEventListener("click",F);u.closeModalBtn.addEventListener("click",S);u.backdrop.addEventListener("click",ce);u.forma.addEventListener("submit",re);async function re(e){e.preventDefault();const{name:t,tel:n,email:a,comment:o}=e.currentTarget,i={name:t.value,phone:n.value,email:a.value,comment:o.value};try{const r=await K(i);b.Notify.success("Your order has been submitted!")}catch(r){b.Notify.failure(r.response.data.message||"Order has not been placed...")}finally{S()}}function F(){window.addEventListener("keydown",P),document.body.classList.add("overflowHidden"),u.backdrop.classList.add("active"),u.modal.classList.add("active")}function S(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",P),document.body.classList.remove("overflowHidden"),u.backdrop.classList.remove("active"),u.modal.classList.remove("active")}function ce(e){e.currentTarget===e.target&&S()}function P(e){e.code==="Escape"&&S()}const c={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),allBtn:document.querySelector(".all-btn")};let L="";const le=()=>window.innerWidth<768?9:12,de=(e,t)=>{const n={};for(let a=0;a<e.length;a+=t){const o=Math.floor(a/t)+1;n[o]=e.slice(a,a+t)}return n},ue=()=>{const e=me(),t='<button class="button-fav all-btn" name="all">All categories</button>',n=JSON.parse(localStorage.getItem("favorites"))||[];c.favoriteRecipesList.innerHTML="",c.favoriteCategoriesList.innerHTML="",n.length?c.favoriteCategoriesList.innerHTML=`${t}${e}`:c.allBtn.style.display="none",k()},k=(e=1)=>{const t=localStorage.getItem("favorites"),n=JSON.parse(t)||[];if(c.allBtn.style.display="none",n.length){c.allBtn.style.display="block";const a=le(),o=de(n,a),i=Object.keys(o).length;i>1?(c.paginationBox.style.display="block",Y(e,a,i,k)):c.paginationBox.style.display="none";let r;L===""?r=n:r=n.filter(d=>d.category===L);const m=r.reduce((d,{title:g,description:J,preview:H,rating:D,id:j,category:W})=>d+z(g,J,H,D,j,W),"");c.favoriteRecipesList.innerHTML=m,document.querySelectorAll(".favorite-btn").forEach(d=>{d.onclick=()=>fe(d)}),document.querySelectorAll(".item-rec").forEach(d=>{d.addEventListener("click",()=>{Q(d)})}),c.warning.classList.add("is-hidden")}else c.warning.classList.remove("is-hidden"),c.allBtn.classList.add("is-hidden");n.length===0?(c.warning.classList.remove("is-hidden"),c.paginationBox.style.display="none",c.favoriteCategoriesList.innerHTML="",c.allBtn.style.display="none"):c.warning.classList.add("is-hidden")},me=()=>{const e=localStorage.getItem("favorites"),t=JSON.parse(e)||[];return t.length?t.flatMap(n=>n.category).filter((n,a,o)=>o.indexOf(n)===a).reduce((n,a)=>n+ge(a),""):""},ge=e=>`<button class="button-fav">${e}</button>`,pe=e=>{e.target.nodeName==="BUTTON"&&(e.target.name==="all"?(L="",O(e.target)):(L=e.target.textContent,O(e.target)),k())},O=e=>{const t=document.querySelector(".all-btn");document.querySelectorAll(".button-fav").forEach(a=>{a===e?a.classList.add("onActive"):a.classList.remove("onActive")}),t.classList.remove("onActive")},fe=e=>{const t=JSON.parse(e.dataset.info),n=localStorage.getItem("favorites");let a=JSON.parse(n)||[];const o=a.findIndex(r=>r.id===t.id);if(o!==-1){const r=a[o].category;a.splice(o,1),localStorage.setItem("favorites",JSON.stringify(a)),(JSON.parse(localStorage.getItem("favorites"))||[]).some(R=>R.category===r)||(document.querySelectorAll(".item").forEach(g=>{g.dataset.category===r&&g.remove()}),c.favoriteCategoriesList.querySelectorAll(".button-fav").forEach(g=>{g.textContent===r&&g.remove()}))}(JSON.parse(localStorage.getItem("favorites"))||[]).length===0?(c.favoriteRecipesList.innerHTML="",c.allBtn.style.display="none",c.warning.classList.remove("is-hidden"),c.paginationBox.style.display="none",c.favoriteCategoriesList.innerHTML=""):k()};document.addEventListener("DOMContentLoaded",ue);c.favoriteCategoriesList.addEventListener("click",pe);export{Q as O,Le as a,ye as b,be as f,he as g,z as r,Y as s};
//# sourceMappingURL=fav-list-DGL7BebQ.js.map
