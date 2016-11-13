'use strict';

var load = function(url, callback) {
  var callbackName = 'JSONPRequest';

  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');

  script.onerror = function(evt) {
    console.log(evt);
    document.querySelector('.pictures').innerHTML = 'Server doesn\'t respond.';
  };

  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

module.exports = load;
