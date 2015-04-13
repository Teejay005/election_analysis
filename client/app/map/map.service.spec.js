'use strict';

describe('Service: map', function () {

  beforeEach(module('analysis.map'));

  var mapService,
    $httpBackend;

  var stubData = {
    "type": "FeatureCollection"
  };

  beforeEach(inject(function (mapDataService, _$httpBackend_, $controller) {
    $httpBackend = _$httpBackend_;
    mapService = mapDataService;
    $httpBackend.expectGET('http://localhost:3000/app/data/nigeria_geojson.json')
      .respond(stubData);

  }));

  it('should get map data from geojson', function () {
    mapService.mapData().then(function (response) {
      expect(response.data.type).toBe(stubData.type);
    });
    $httpBackend.flush();
  });
});
