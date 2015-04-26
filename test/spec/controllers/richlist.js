'use strict';

describe('Controller: RichListCtrl', function () {
  beforeEach(module('vodaApp'));

  var RichListCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RichListCtrl = $controller('RichListCtrl', {
      $scope: scope,
      $http:{}
    });
  }));

  it('should loadcountries and scope.countries.length =17', function () {
    expect(scope.countries.length).toBe(17);
  });
});


