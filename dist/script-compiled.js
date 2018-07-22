'use strict';

var itemImageWrappers = document.querySelectorAll('.js-modal-trigger');

var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modalTitle');
var modalImage = document.getElementById('modalImage');
var modalContainer = document.getElementById('modalContainer');

function loadContentToMoadl(image, title) {
  modalImage.src = image;
  modalTitle.innerHTML = title;
}

function getImageForModal(element) {
  if (element.tagName === 'IMG') {
    return element;
  } else {
    // if user clicked on image wrapper
    return element.childNodes[1];
  }
}

function openModal(event) {
  var image = getImageForModal(event.target);
  loadContentToMoadl(image.src, image.alt);
  modal.classList.add('modal--open');
}

function closeModal(event) {
  var clickedBeyondTheImage = event.target.classList.contains('js-no-closing') === false;
  if (clickedBeyondTheImage) {
    modal.classList.remove('modal--open');
  }
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = itemImageWrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    item.addEventListener('click', openModal, true);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

modalContainer.addEventListener('click', closeModal, true);

//# sourceMappingURL=script-compiled.js.map