import products from "./data/products.js";




// {
//   /*
// <article class="product">
//   <h2 class="product__name">Название</h2>
//   <p class="product__descr">Описание</p>
//   <p product__pridct>Цена: 1111 кредитов</p>
// </article>
// */
// }

const productsContainerEl = document.querySelector('.js-products')


const makeProductCard = ({ name, description, price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');


    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add('product__description');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Price: ${price} credit`;
    priceEl.classList.add('product__price');


    productEl.append(nameEl, descriptionEl, priceEl);
    
    return productEl;
};

const elements = products.map(makeProductCard);

productsContainerEl.append(...elements);