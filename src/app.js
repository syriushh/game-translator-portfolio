const itemImageWrappers = document.querySelectorAll('.js-modal-trigger');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalContainer = document.getElementById('modalContainer')

function loadContentToMoadl(image, title) {
  modalImage.src = image
  modalTitle.innerHTML = title;
}

function getImageForModal(element) {
  if (element.tagName === 'IMG') {
    return element;
  } else {  // if user clicked on image wrapper
    return element.childNodes[1];
  }
}

function openModal(event) {
  const image = getImageForModal(event.target);
  loadContentToMoadl(image.src, image.alt)
  modal.classList.add('modal--open');
}

function closeModal(event) {
  const clickedBeyondTheImage = event.target.classList.contains('js-no-closing') === false
  if (clickedBeyondTheImage) {
    modal.classList.remove('modal--open');
  }
}

for (let item of itemImageWrappers) {
  item.addEventListener('click', openModal, true);
}

modalContainer.addEventListener('click', closeModal, true)