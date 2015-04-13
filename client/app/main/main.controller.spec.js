'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('electionAnalysisApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
