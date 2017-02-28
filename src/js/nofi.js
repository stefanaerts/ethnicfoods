window.NoFi = (function (window, document, undefined) {

  'use strict';

  var emitEvent = function (name) {

    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    window.dispatchEvent(event);

  };

  var init = function (obj) {

    var options = obj || {};
    var interval = options.interval || 5000;
    var eventName = options.eventName || 'offline';
    var exit = options.exit || false;

    if ('onLine' in navigator) {
      (function checkStatus() {
        setTimeout(function () {
          if (!navigator.onLine) {
           if(window.location.href.indexOf('checkoutMenu') !== -1){
             alert('No internet connection at this moment,pls connect again  and wait 5 seconds to see you are up again ');
           }

        //    alert( 'internet is down');
  //          }
            emitEvent(eventName);
            if (exit) {
              return;
            }
          }
          checkStatus();
        }, 5000);
      })();
    }

  };

  return {
    init: init
  };

})(window, document);
