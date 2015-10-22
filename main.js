/* global console */

'use strict';

(function() {

  var prototype = {};

  for (var method in XMLHttpRequest.prototype) {
    try {
      if (typeof XMLHttpRequest.prototype[method] === 'function') {
        prototype[method] = XMLHttpRequest.prototype[method];
        XMLHttpRequest.prototype[method] = function() {
          console.log(method, arguments);
          return prototype[method].apply(this, arguments);
        }
      }
    } catch (err) {
      console.info(method + ' is an illusion');
    }
  }

  var scripts = document.body.getElementsByTagName('script');
  document.body.removeChild(scripts[scripts.length - 1]);

}());

