import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector(".gallery");
const createGallaryItems = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallaryItems);

const simpleLightbox = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
simpleLightbox.on("show.simpleLightbox");

console.log(galleryItems);
