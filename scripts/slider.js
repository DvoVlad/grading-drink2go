window.addEventListener("load",()=>{let t=1,_=document.querySelectorAll(".hero-slider__item"),o=document.querySelector(".hero-slider__prev"),r=document.querySelector(".hero-slider__next"),l=document.querySelector(".hero-slider__background"),s=_.length;t>=s?(o.disabled=!0,r.disabled=!0):o.disabled=!0;let c=document.querySelector(".hero-slider__paginations-wrapper");for(let i=1;i<=s;i++){let e=document.createElement("button");e.dataset.item=i,e.classList.add("hero-slider__pagination"),e.classList.add("slider-pagination"),e.type="button",i===1&&e.classList.add("hero-slider__pagination--active"),c.appendChild(e)}c.addEventListener("click",i=>{let e=i.target,a=document.querySelector(".hero-slider__item--active");t=+e.dataset.item;let d=document.querySelector(`.hero-slider__item:nth-child(${t})`),n=d.dataset.color;l.style.backgroundColor=n,document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),e.classList.add("hero-slider__pagination--active"),a.classList.remove("hero-slider__item--active"),d.classList.add("hero-slider__item--active"),t===s?r.disabled=!0:r.disabled=!1,t===1?o.disabled=!0:o.disabled=!1}),r.addEventListener("click",()=>{let i=document.querySelector(".hero-slider__item--active"),e=document.querySelector(`.hero-slider__item:nth-child(${++t})`),a=e.dataset.color;l.style.backgroundColor=a,i.classList.remove("hero-slider__item--active"),e.classList.add("hero-slider__item--active"),t===s&&(r.disabled=!0),t>1&&(o.disabled=!1),document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),document.querySelector(`.hero-slider__pagination:nth-child(${t})`).classList.add("hero-slider__pagination--active")}),o.addEventListener("click",()=>{let i=document.querySelector(".hero-slider__item--active"),e=document.querySelector(`.hero-slider__item:nth-child(${--t})`),a=e.dataset.color;l.style.backgroundColor=a,i.classList.remove("hero-slider__item--active"),e.classList.add("hero-slider__item--active"),t===1&&(o.disabled=!0),t<s&&(r.disabled=!1),document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),document.querySelector(`.hero-slider__pagination:nth-child(${t})`).classList.add("hero-slider__pagination--active")})});
