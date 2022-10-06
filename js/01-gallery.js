import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const headStyleLiinks = document.querySelector("head");
const bodyScriptref = document.querySelector("body");
const galleryBox = document.querySelector(".gallery");

const divGaleryArray = [];

galleryItems.map((imgObjekt) => {
  const divGaleryItem = document.createElement("div");
  const linkGaleryItem = document.createElement("a");
  const imgGaleryItem = document.createElement("img");
  divGaleryItem.classList.add("gallery__item");
  linkGaleryItem.classList.add("gallery__link");
  imgGaleryItem.classList.add("gallery__image");
  linkGaleryItem.href = imgObjekt.original;
  imgGaleryItem.src = imgObjekt.preview;
  imgGaleryItem.alt = imgObjekt.description;
  imgGaleryItem.setAttribute("data-source", imgObjekt.original);
  linkGaleryItem.append(imgGaleryItem);
  divGaleryItem.append(linkGaleryItem);
  divGaleryArray.push(divGaleryItem);
});

const styleLiinks = document.createElement("link");
styleLiinks.rel = "stylesheet";
styleLiinks.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";

const scriptTag = document.createElement("script");
scriptTag.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

galleryBox.append(...divGaleryArray);

headStyleLiinks.append(styleLiinks);

bodyScriptref.append(scriptTag);

galleryBox.addEventListener("click", (etven) => {
  etven.preventDefault();
  console.log(etven.target.nodeName);
  if (etven.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = ${etven.target.dataset.source} ">`
  );
  instance.show();
});
