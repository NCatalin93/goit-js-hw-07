import { galleryItems } from "./gallery-items.js";
// Change code below this line
import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";
const modal = basicLightbox.create("<img>");

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

const modalImage = modal.element().querySelector("img");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const dataSrc = event.target.getAttribute("data-src");
  modalImage.src = dataSrc;
  modal.show();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && modal.visible()) {
    event.preventDefault();
    modal.close();
  }
});

console.log(galleryItems);
