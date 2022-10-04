import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

 const galleryBox = document.querySelector(".gallery");


 galleryBox.addEventListener('click', (etven) => {etven.preventDefault();
     var lightbox = new SimpleLightbox('.gallery a ', { captionAttribute:'.img alt' });
 
     lightbox.show();
 })