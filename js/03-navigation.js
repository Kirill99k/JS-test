const listEl = document.querySelector('.list');

const itemEl = document.querySelector('.item');

const parentListEl = listEl.parentNode;
console.log(parentListEl);

const parentItemEl = itemEl.parentNode;
console.log(parentItemEl);


const childNodesEl = listEl.children;
console.log(childNodesEl); 



const firstChildEl = itemEl.firstChild;
console.log(firstChildEl);



const firstElementChildEl = listEl.firstElementChild;
console.log(firstElementChildEl);



const lastChildEl = itemEl.lastChild;
console.log(lastChildEl);



const lastElementChildEl = listEl.lastElementChild;
console.log(lastElementChildEl);



const previousSiblingEl = itemEl.previousSibling;
console.log(previousSiblingEl);


const previousElementSiblingEl = itemEl.previousElementSibling;
console.log(previousElementSiblingEl);



const nextSiblingEl = itemEl.nextSibling;
console.log(nextSiblingEl);



const nextElementSiblingEl = listEl.nextElementSibling;
console.log(nextElementSiblingEl); 