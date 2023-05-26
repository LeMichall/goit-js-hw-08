import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = () => {
  //"virtual" array
  let tempGallery = [];
  //creating each element
  galleryItems.forEach((e, i) => {
    const { preview, original, description } = galleryItems[i];
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    // assign classes
    a.classList.add('gallery__item');
    img.classList.add('gallery__image');
    // assign attributes
    a.setAttribute('href', original);
    img.setAttribute('src', preview);
    img.setAttribute('alt', description);
    //creating proper item
    li.appendChild(a).appendChild(img);
    tempGallery.push(li);
  });
  //push to real gallery
  gallery.append(...tempGallery);
};
createGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: 250,
});

function eventHandler(event) {
  // blocking unwanted click behaviour
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  lightbox.open(event.target);
}

gallery.addEventListener('click', eventHandler);
