'use strict';
(function() {
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';
  var callbackName;

  var load = function(url, callback) {

    window[callbackName] = function(data) {
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };

  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  var IMAGE_LOAD_TIMEOUT = 10000;
  var IMG_SIZE = 182;
  var container = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture-template');
  var templateContainer = 'content' in pictureTemplate ? pictureTemplate.content : pictureTemplate;

  var getPicture = function(picture) {
    var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
    pictureElement.querySelector('.picture-comments').innerHTML = picture.comments;
    pictureElement.querySelector('.picture-likes').innerHTML = picture.likes;
    var templateImage = pictureElement.querySelector('img');

    var pic = new Image(templateImage.width, templateImage.height);
    pic.onload = function(evt) {
      clearTimeout(backgroundImageTimeout);
      templateImage.src = evt.target.src;
      templateImage.width = IMG_SIZE;
      templateImage.height = IMG_SIZE;
    };
    pic.onerror = function () {
      pictureElement.classList.add('picture-load-failure');
    };
    pic.src = picture.url;

    var backgroundImageTimeout = setTimeout(function() {
      pictureElement.classList.add('hotel-nophoto');
    }, IMAGE_LOAD_TIMEOUT);

    return pictureElement;
  };

  var renderPictures = function(pictures) {
    pictures.forEach(function(picture) {
      container.appendChild(getPicture(picture));
    });
  };

  load(PICTURES_LOAD_URL, renderPictures);

  filters.classList.remove('hidden');

})();
