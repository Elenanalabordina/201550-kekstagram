'use strict';

module.exports = function() {

  var load = require('./load');
  var getPicture = require('./picture');
  var gallery = require('./gallery');

  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

  var container = document.querySelector('.pictures');
  var filters = document.querySelector('.filters');

  var renderPictures = function(pictures) {
    // Hide filter's block
    filters.classList.add('hidden');
    // Render every single picture
    pictures.forEach(function(picture, picNum) {
      container.appendChild(getPicture(picture, picNum));
    });
    // Show filter's block
    filters.classList.remove('hidden');

    gallery.setPictures(pictures);
  };

  load(PICTURES_LOAD_URL, renderPictures);

};
