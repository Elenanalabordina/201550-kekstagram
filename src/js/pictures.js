'use strict';
var getImages = function() {

  var load = require('./load');
  var getPicture = require('./picture');
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';


  var filters = document.querySelector('.filters');
  var container = document.querySelector('.pictures');


  var renderPictures = function(pictures) {
    filters.classList.add('hidden');
    pictures.forEach(function(picture) {
      container.appendChild(getPicture(picture));
    });
    filters.classList.remove('hidden');
  };

  load(PICTURES_LOAD_URL, renderPictures);

};
module.exports = getImages;
