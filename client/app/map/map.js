'use strict';

(function (module) {
  module.factory('MapService', function () {
    function initMap(elementId) {
      var map = L.map(elementId, {
        zoomControl: false,
        scrollWheelZoom: false,
        touchZoom: false,
        doubleClickZoom: false
      }).setView([1.406, 32.000], 7);

      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 13,
        minZoom: 7
      }).addTo(map);

      return map;
    }

    return {
      render: function (elementId) {
        return initMap(elementId);
      }
    };
  });

  module.directive('map', function (MapService, $window) {
    return {
      scope: false,
      link: function (scope, element, attrs) {
        $window.map = MapService.render(attrs.id);
      }
    };
  });
}(angular.module('analysis.map', [])));

