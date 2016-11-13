'use strict';

var getPicture = function(picture) {
  var IMAGE_LOAD_TIMEOUT = 10000;
  var IMG_SIZE = 182;
  var pictureTemplate = document.querySelector('#picture-template');
  var templateContainer = 'content' in pictureTemplate ? pictureTemplate.content : pictureTemplate;
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;

  var templateImage = pictureElement.querySelector('img');
  var pic = new Image();

  pic.onload = function(evt) {
    clearTimeout(backgroundImageTimeout);
    templateImage.src = evt.target.src;
    templateImage.width = IMG_SIZE;
    templateImage.height = IMG_SIZE;
  };

  pic.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };

  pic.src = picture.url;

  var backgroundImageTimeout = setTimeout(function() {
    pictureElement.classList.add('hotel-nophoto');
  }, IMAGE_LOAD_TIMEOUT);

  return pictureElement;
};

module.exports = getPicture;
