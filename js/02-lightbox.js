import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const headStyleLiinks = document.querySelector("head");
const bodyScriptref = document.querySelector("body");
const galleryBox = document.querySelector(".gallery");

const liGaleryArray = [];

galleryItems.map((imgObjekt) => {
  const liGaleryItem = document.createElement("li");
  const linkGaleryItem = document.createElement("a");
  const imgGaleryItem = document.createElement("img");
  linkGaleryItem.classList.add("gallery__item");
  linkGaleryItem.href = imgObjekt.original;
  imgGaleryItem.src = imgObjekt.preview;
  imgGaleryItem.alt = imgObjekt.description;
  imgGaleryItem.classList.add("gallery__image");
  linkGaleryItem.append(imgGaleryItem);
  liGaleryItem.append(linkGaleryItem);
  liGaleryArray.push(liGaleryItem);
});

const styleLiinks = document.createElement("link");
styleLiinks.rel = "stylesheet";
styleLiinks.href =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.css";

const scriptTag = document.createElement("script");
scriptTag.src =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js";

galleryBox.append(...liGaleryArray);
headStyleLiinks.append(styleLiinks);
bodyScriptref.append(scriptTag);

galleryBox.addEventListener("click", (etven) => {
  etven.preventDefault();
  new SimpleLightbox(".gallery a ", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    captionSelector: "img",
    captionType: "attr",
    captionPosition: "bottom",
    captionClass: "",
  });

 
});
