import { galleryItems } from './gallery-items.js';
console.log(galleryItems);



 const galleryBox = document.querySelector(".gallery");


 galleryBox.addEventListener('click', (etven) => {etven.preventDefault();

  const instance = basicLightbox.create(`<img src = ${etven.target.dataset.source} ">`)
  instance.show();

 })



