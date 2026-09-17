// * products data display
const productLine = document.getElementById('product_line'); //* in products home section

products.forEach((p, i) => {

    const card = document.createElement('article');

    card.className = [
        'product-card',
        'snap-start',
        'flex-shrink-0',
        'w-56',
        'sm:w-60',
        'mt-1',
        'bg-[var(--secondary)]',
        'border border-[var(--primary)]/15',
        'rounded-2xl',
        'overflow-hidden',
        'hover:scale-102',
        'transition-all',
        'duration-300',

    ].join(' ');

    card.setAttribute('data-aos', 'fade-up');


    card.innerHTML = `
        <div class="relative h-40 overflow-hidden">
          
        <img src="${p.img}" alt="${p.title}"
               class="w-full h-full group-hover:scale-105 object-cover transition-transform duration-500 " />
         
               <div class="absolute inset-0 via-[var(--secondary)]/30 bg-gradient-to-t from-[var(--secondary)] to-transparent"></div>
          
          <span class="absolute bg-[var(--primary)] text-[var(--secondary)] top-3 right-3 font-inter font-bold text-xs px-2.5 py-1 rounded-full">
            $ ${p.price.toFixed(2)}
          </span>

        </div>

        <div class="p-4 flex flex-col gap-3">

          <div>
          
            <h3 class="font-playfair font-semibold text-base text-white">${p.title}</h3>
            <p class="font-inter text-white/50 text-xs leading-relaxed">${p.summary}</p>
          
            </div>

          <button
            
            class="add-btn text-xs w-full text-[var(--primary)]/80 hover:text-[var(--secondary)] hover:bg-[var(--primary)] flex items-center justify-center gap-2
                   border border-[var(--primary)]/25 cursor-pointer hover:border-[var(--primary)]
                   font-inter font-semibold  py-2.5 rounded-xl transition-all duration-250">
            <i class="fa-solid fa-cart-plus text-xs"></i> Add to Cart
          </button>

        </div>
        `;

    productLine.appendChild(card); //* in products home section
});


// * message
const addMessage = document.getElementById('done_mes');
let mesTimer = null;


function showMes(msg) {
    clearTimeout(mesTimer);

    addMessage.textContent = msg;
    addMessage.classList.replace('opacity-0', 'opacity-100');
    addMessage.classList.remove('pointer-events-none');
    mesTimer = setTimeout(() => {
        addMessage.classList.replace('opacity-100', 'opacity-0');
        addMessage.classList.add('pointer-events-none');
    }, 2400);

}


productLine.addEventListener('click', e => {
    const btn = e.target.closest('.add-btn');
    if (!btn) return;
    showMes("Product Added");
});


//  * pros data display
const prosCont = document.getElementById('pros');

pros.forEach((p, i) => {
    const prosCard = document.createElement('article');

    prosCard.className = [
        'flex',
        'flex-col',
        'items-center',
        'text-center',
        'p-6',
        'rounded-2xl',
        'border',
        'border-[var(--primary)]/10',
        'hover:border-[var(--primary)]/30',
        'transition-all',
        'duration-300',
    ].join(' ');

    prosCard.setAttribute('data-aos', 'fade-up');

    prosCard.innerHTML = `
  <div class="pro-ring  rounded-full flex items-center justify-center mb-5 w-14 h-14">
    <i class="${p.icon} text-[var(--primary)] text-xl"></i>
  </div>
  <h3 class="font-boo text-white text-sm tracking-wide mb-2">${p.title}</h3>
  <p class="font-playfair text-white/45 text-xs leading-relaxed">${p.desc}</p>
`;
    prosCont.appendChild(prosCard);
});