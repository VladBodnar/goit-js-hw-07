import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const liGaleryArray = [];

galleryItems.map((imgObjekt) => {
   const liGaleryItem = document.createElement('li');
   const linkGaleryItem = document.createElement('a');
   const imgGaleryItem = document.createElement('img');
   linkGaleryItem.class="gallery__item";
   linkGaleryItem.href=imgObjekt.original;
   imgGaleryItem.src=imgObjekt.preview;
   imgGaleryItem.alt=imgObjekt.description;
   linkGaleryItem.append(imgGaleryItem);
   liGaleryItem.append(linkGaleryItem);   
   liGaleryArray.push(liGaleryItem); 
})


const galleryBox = document.querySelector(".gallery");

galleryBox.append(...liGaleryArray);

  galleryBox.addEventListener('click', (etven) => {etven.preventDefault();
      var lightbox = new SimpleLightbox('.gallery a ', { captionAttribute:'.img alt' });
 
      lightbox.show();
  })