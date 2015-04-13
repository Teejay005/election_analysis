'use strict';

(function (module) {
  var map;

  module.factory('MapService', function (mapDataService) {

    function initMap(elementId) {
      var map = L.map(elementId, {
        zoomControl: false,
        scrollWheelZoom: false,
        touchZoom: false,
        doubleClickZoom: false
      }).setView([9.072264, 7.491302], 6);

      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 12,
        minZoom: 6
      }).addTo(map);

      return map;
    }

    function addDistrictsLayer(map) {
      return mapDataService.mapData().then(function (response) {
        L.geoJson(response.data, {
          onEachFeature: function () {
          }
        }).addTo(map);
      });
    }

    return {
      render: function (elementId) {
        map = initMap(elementId);

        return addDistrictsLayer(map).then(function () {
          return this;
        }.bind(this));
      }
    };
  });

  module.factory('mapDataService', function ($http) {
    return {
      mapData: function () {
        return $http.get('http://localhost:3000/app/data/nigeria_geojson.json', {cache: true});
      }
    };
  });

  module.directive('map', function (MapService, $window) {
    return {
      scope: false,
      link: function (scope, element, attrs) {
        MapService.render(attrs.id).then(function (map) {
          $window.map = map;
        });
      }
    };
  });
}(angular.module('analysis.map', [])));

