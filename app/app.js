'use strict';

// Declare app level module which depends on views, and core components
var kuroApp = angular.module('app', [
  'ngRoute',
]);

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  iconHtml : '<i class="confirmation"></i>',
  customClass: {
    popup: 'colored-toast', 
  },
  showConfirmButton: false,
  showCloseButton: true,
  timer: 2000
})

