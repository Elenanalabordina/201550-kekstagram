'use strict';

var galleryTemplate = document.querySelector('.gallery-overlay');
var galleryImage = document.querySelector('.gallery-overlay-image');
var galleryBtnClose = document.querySelector('.gallery-overlay-close');
var galleryLikeBtn = document.querySelector('.gallery-overlay-controls-like');
var galleryCommentsCount = galleryTemplate.querySelector('.comments-count');
var galleryCommentsLike = galleryTemplate.querySelector('.likes-count');

var activePicture = 0;

var Gallery = function() {
  this.pictures = [];
  this.activePicture = activePicture;
  this.galleryTemplate = galleryTemplate;
  this.galleryImage = galleryImage;
  this.galleryBtnClose = galleryBtnClose;
  this.galleryLikeBtn = galleryLikeBtn;
  this.galleryCommentsCount = galleryCommentsCount;
  this.galleryCommentsLike = galleryCommentsLike;
};

Gallery.prototype.setPictures = function(pics) {
  this.pictures = pics;
};

Gallery.prototype.show = function(num) {
  var self = this;


  this.galleryBtnClose.onclick = function() {
    self.hide();
  };


  this.galleryImage.onclick = function() {
    var nextPicture;
    nextPicture = ++activePicture;
    if (nextPicture === self.pictures.length) {
      nextPicture = 0;
    }
    self.setActivePicture(nextPicture);
  };


  galleryTemplate.classList.remove('invisible');


  this.setActivePicture(num);
};

Gallery.prototype.hide = function() {

  this.galleryTemplate.classList.add('invisible');

  this.galleryImage.onclick = null;
  this.galleryBtnClose.onclick = null;
};

Gallery.prototype.setActivePicture = function(numb) {
  activePicture = numb;

  this.galleryImage.src = this.pictures[activePicture].url;
  
  this.galleryCommentsCount.innerHTML = this.pictures[activePicture].comments;
  this.galleryCommentsLike.innerHTML = this.pictures[activePicture].likes;
};

module.exports = new Gallery();
