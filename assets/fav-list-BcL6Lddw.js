import{a as p,P as _,N as b,b as $,e as C,c as V}from"./vendor-D3mgUZ9J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const f="https://tasty-treats-backend.p.goit.global/api";async function he(){try{return(await p.get(`${f}/categories`)).data}catch(e){return console.error("Kategoriler alınırken hata oluştu / Error while fetching categories:",e),[]}}async function K(e){const t=`${f}/recipes/${e}`;return(await p.get(t)).data}const be=async function(){try{return(await p.get(`${f}/recipes/popular`)).data}catch(e){throw e}};async function Le(){const e=`${f}/areas`;return(await p.get(e)).data}async function Se(){const e=`${f}/ingredients`;return(await p.get(e)).data}async function U(e,t){const s=`${f}/recipes/${e}/rating`;return await p.patch(s,t)}function z(e){return p.post(`${f}/orders/add`,e)}function G(){const e=window.innerWidth;if(e<768)return 2;if(e>=768)return 3}function X(e,t,s,a){const n={totalItems:Number(t)*Number(s),itemsPerPage:Number(t),visiblePages:G(),page:Number(e),centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new _("pagination",n).on("afterMove",({page:i})=>{a(i)})}const v="/tasty-treats/assets/icons-BeXmI9hm.svg";function y(e,t){return e<=t?"rate-item-active":"rate-item"}function Y(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t)||[];return t&&s.find(a=>a.id===e)?"active":""}function x(e){return`<ul class='rate-list'>
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
          </ul>`}function Q(e,t,s,a,n,o){const i={title:e,description:t.replace("'",""),preview:s,rating:a,id:n,category:o},m=a>5?5 .toFixed(1):a.toFixed(1);return`<div data-category='${o}' class='recipe-item animate__animated animate__fadeIn' 
                style='
                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),
                      rgba(5, 5, 5, 0)),
                      url(${s}); 
                      background-position: center;
                      background-size: cover;'>

                  <div class='inter-box'>

                    <button type='button' 
                    class='favorite-btn ${Y(n)}'
                    data-info='${JSON.stringify(i)}'
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
                    <button type='button' name='details' class='button item-rec' data-id=${n}>See recipe</button>
                    </div>
                  </div>
                </div>`}const r={closeModalBtn:document.querySelector(".close-modal"),backdropModal:document.querySelector(".backdrop-recipes"),mainModalRecipes:document.querySelector(".modal-recipes"),modalRecipes:document.querySelector(".modal-recipes-js"),backdropModal:document.querySelector(".backdrop-recipes"),saveRecipeBtn:document.querySelector(".save-recipes-btn"),giveRatingBtn:document.querySelector(".give-rating-btn"),rateModal:document.querySelector(".modal-rating"),closeRate:document.querySelector(".close-rating-modal"),modalRateList:document.querySelector(".modal-rating-list"),rateVal:document.querySelector(".modal-rating-span"),rateRage:document.querySelector(".rating-range-input"),rateEmail:document.querySelector(".rating-email-input"),rateForm:document.querySelector(".modal-rating-form"),sendRateBtn:document.querySelector(".modal-rating-send-btn")};function Z(e){r.closeModalBtn.addEventListener("click",h),r.backdropModal.addEventListener("click",N),r.giveRatingBtn.addEventListener("click",q),window.addEventListener("keydown",I),r.backdropModal.classList.remove("is-hidden-modal"),r.mainModalRecipes.classList.remove("is-hidden-modal"),r.rateForm.dataset.id=e.dataset.id,ae(e.dataset.id),A();const t=localStorage.getItem("favorites"),s=JSON.parse(t);t&&(s.find(a=>a.id===e.dataset.id)?r.saveRecipeBtn.textContent="Remove favorite":r.saveRecipeBtn.textContent="Add to favorite"),r.saveRecipeBtn.addEventListener("click",F)}function q(){r.mainModalRecipes.classList.add("is-hidden-modal"),r.rateModal.classList.remove("is-hidden-modal"),r.closeRate.addEventListener("click",B),r.modalRateList.addEventListener("click",E),r.rateEmail.addEventListener("input",w),r.rateForm.addEventListener("submit",M)}function E(e){const t=e.target.closest(".modal-rating-star-item");if(t){const s=[...e.currentTarget.children].indexOf(t)+1;[...e.currentTarget.children].forEach((a,n)=>n<=s-1?a.classList.add("is-rated"):a.classList.remove("is-rated")),r.rateVal.textContent=s.toFixed(1),r.rateRage.value=s}}function ee(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function w(){ee(r.rateEmail.value)?(r.rateEmail.style.borderColor="#9bb537",r.sendRateBtn.disabled=!1):(r.rateEmail.style.borderColor="#b83245",r.sendRateBtn.disabled=!0)}async function M(e){e.preventDefault();const t={rate:Number(e.target.elements["raiting-star"].value),email:e.target.elements.email.value},s=r.rateForm.dataset.id;try{await U(s,t),b.Notify.success("Değerlendirme için teşekkürler. / Thank you for appreciating the recipe.")}catch(a){b.Notify.failure(a.response.data.message||"Değerlendirme başarısız... / Rating has not been submited...")}h()}function te(){[...r.modalRateList.children].forEach(e=>e.classList.remove("is-rated")),r.rateEmail.style.borderColor="",r.sendRateBtn.disabled=!0,r.rateVal.textContent="0.0",r.rateForm.dataset.id="",r.rateForm.reset()}function B(){r.mainModalRecipes.classList.remove("is-hidden-modal"),r.rateModal.classList.add("is-hidden-modal"),r.closeRate.removeEventListener("click",B),r.modalRateList.addEventListener("click",E),r.rateEmail.addEventListener("input",w),r.rateForm.addEventListener("submit",M)}function h(){ie(),te(),r.backdropModal.classList.add("is-hidden-modal"),r.mainModalRecipes.classList.add("is-hidden-modal"),r.rateModal.classList.add("is-hidden-modal"),r.modalRecipes.innerHTML="",A()}function N({currentTarget:e,target:t}){e===t&&h()}function I(e){e.key==="Escape"&&h()}async function ae(e){try{const t=await K(e),{title:s,description:a,preview:n,rating:o,_id:i,category:m}=t,l={title:s,description:a,preview:n,rating:o,id:i,category:m};r.modalRecipes.dataset.info=`${JSON.stringify(l)}`,ne(se(t)),re()}catch(t){console.error(t)}}function se(e){const t=e.ingredients,s=e.youtube?e.youtube.replace("watch?v=","embed/"):e.thumb,a=e.tags;let n="";if(a[0])for(let l=0;l<a.length;l++)n+=`<li class="recipe-tag">#${a[l]}</li>`;let o="";for(let l=0;l<t.length;l++)o+=`<li class="recipe-ingridient">${t[l].name} <span class="recipe-ps">${t[l].measure}</span></li>`;const i=e.rating>5?5 .toFixed(1):e.rating.toFixed(1);return`<div class="recipe-parts">
    ${oe(s,e.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${e.title}</h2>
      <div class="rating-part">
        <p class='rate'>${i}</p>
      ${x(i)}
        <p class="recipe-time">${e.time} min</p>
      </div>
      <ul class="ingridients">
        ${o}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${n}
  </ul>
  <p class="recipe-instr">${e.instructions}</p>
  </div>
`}function re(){const e=document.querySelector(".recipe-instr");$.init(e,{alwaysShowTracks:!0});const t=document.querySelector(".ingridients");$.init(t,{alwaysShowTracks:!0})}function ne(e){r.modalRecipes.insertAdjacentHTML("afterbegin",e)}function A(){document.querySelector("body").classList.toggle("overflow-hidden")}function oe(e,t){return e.endsWith(".jpg")?`<img class="modal-img" src="${e}" alt="${t}">`:`<iframe
      class="recipe-frame"
      src="${e}"
      frameborder="0"
      alt="${t}"
    ></iframe>`}function F({target:e}){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=JSON.parse(r.modalRecipes.dataset.info);t?s.find(n=>n.id===a.id)?(localStorage.setItem("favorites",JSON.stringify([...s.filter(n=>n.id!==a.id)])),e.textContent="Add to favorite"):(localStorage.setItem("favorites",JSON.stringify([...s,a])),e.textContent="Remove favorite"):(localStorage.setItem("favorites",JSON.stringify([a])),e.textContent="Remove favorite")}function ie(){r.closeModalBtn.removeEventListener("click",h),r.backdropModal.removeEventListener("click",N),r.saveRecipeBtn.removeEventListener("click",F),r.giveRatingBtn.removeEventListener("click",q),r.closeRate.removeEventListener("click",B),r.modalRateList.removeEventListener("click",E),r.rateEmail.removeEventListener("input",w),r.rateForm.removeEventListener("submit",M),window.removeEventListener("keydown",I)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),(n?C:V)(document.body)};t.addEventListener("click",a),s.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),C(document.body))})})();const u={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{u.openModalBtnHero.addEventListener("click",T)}catch{}u.openModalBtn.addEventListener("click",T);u.closeModalBtn.addEventListener("click",S);u.backdrop.addEventListener("click",le);u.forma.addEventListener("submit",ce);async function ce(e){e.preventDefault();const{name:t,tel:s,email:a,comment:n}=e.currentTarget,o={name:t.value,phone:s.value,email:a.value,comment:n.value};try{const i=await z(o);b.Notify.success("Your order has been submitted!")}catch(i){b.Notify.failure(i.response.data.message||"Order has not been placed...")}finally{S()}}function T(){window.addEventListener("keydown",P),document.body.classList.add("overflowHidden"),u.backdrop.classList.add("active"),u.modal.classList.add("active")}function S(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",P),document.body.classList.remove("overflowHidden"),u.backdrop.classList.remove("active"),u.modal.classList.remove("active")}function le(e){e.currentTarget===e.target&&S()}function P(e){e.code==="Escape"&&S()}const c={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),allBtn:document.querySelector(".all-btn")};let L="";const de=()=>window.innerWidth<768?9:12,ue=(e,t)=>{const s={};for(let a=0;a<e.length;a+=t){const n=Math.floor(a/t)+1;s[n]=e.slice(a,a+t)}return s},me=()=>{const e=ge(),t='<button class="button-fav all-btn" name="all">All categories</button>';(JSON.parse(localStorage.getItem("favorites"))||[]).length?c.favoriteCategoriesList.innerHTML=`${t}${e}`:c.allBtn.style.display="none",k()},k=(e=1)=>{const t=localStorage.getItem("favorites"),s=JSON.parse(t)||[];if(c.allBtn.style.display="none",s.length){c.allBtn.style.display="block";const a=de(),n=ue(s,a),o=Object.keys(n).length;o>1?(c.paginationBox.style.display="block",X(e,a,o,k)):c.paginationBox.style.display="none";let i;L===""?i=s:i=s.filter(d=>d.category===L);const m=i.reduce((d,{title:g,description:J,preview:D,rating:H,id:j,category:W})=>d+Q(g,J,D,H,j,W),"");c.favoriteRecipesList.innerHTML=m,document.querySelectorAll(".favorite-btn").forEach(d=>{d.onclick=()=>ve(d)}),document.querySelectorAll(".item-rec").forEach(d=>{d.addEventListener("click",()=>{Z(d)})}),c.warning.classList.add("is-hidden")}else c.warning.classList.remove("is-hidden"),c.allBtn.classList.add("is-hidden");s.length===0?(c.warning.classList.remove("is-hidden"),c.paginationBox.style.display="none",c.favoriteCategoriesList.innerHTML="",c.allBtn.style.display="none"):c.warning.classList.add("is-hidden")},ge=()=>{const e=localStorage.getItem("favorites"),t=JSON.parse(e)||[];return t.length?t.flatMap(s=>s.category).filter((s,a,n)=>n.indexOf(s)===a).reduce((s,a)=>s+pe(a),""):""},pe=e=>`<button class="button-fav">${e}</button>`,fe=e=>{e.target.nodeName==="BUTTON"&&(e.target.name==="all"?(L="",O(e.target)):(L=e.target.textContent,O(e.target)),k())},O=e=>{const t=document.querySelector(".all-btn");document.querySelectorAll(".button-fav").forEach(a=>{a===e?a.classList.add("onActive"):a.classList.remove("onActive")}),t.classList.remove("onActive")},ve=e=>{const t=JSON.parse(e.dataset.info),s=localStorage.getItem("favorites");let a=JSON.parse(s)||[];const n=a.findIndex(i=>i.id===t.id);if(n!==-1){const i=a[n].category;a.splice(n,1),localStorage.setItem("favorites",JSON.stringify(a)),(JSON.parse(localStorage.getItem("favorites"))||[]).some(R=>R.category===i)||(document.querySelectorAll(".item").forEach(g=>{g.dataset.category===i&&g.remove()}),c.favoriteCategoriesList.querySelectorAll(".button-fav").forEach(g=>{g.textContent===i&&g.remove()}))}(JSON.parse(localStorage.getItem("favorites"))||[]).length===0?(c.favoriteRecipesList.innerHTML="",c.allBtn.style.display="none",c.warning.classList.remove("is-hidden"),c.paginationBox.style.display="none",c.favoriteCategoriesList.innerHTML=""):k()};document.addEventListener("DOMContentLoaded",me);c.favoriteCategoriesList.addEventListener("click",fe);export{Z as O,Se as a,he as b,Le as f,be as g,Q as r,X as s};
//# sourceMappingURL=fav-list-BcL6Lddw.js.map
