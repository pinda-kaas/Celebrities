'use strict';

describe('Filter: CurrencyFilter', function () {

  var $filter;
  beforeEach(function () {
    module('vodaApp');
  });

  beforeEach( inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('should convert to AUD#',function(){
    expect($filter('currency')(1,"AUD$")).toEqual("AUD$ 1.29");
  });

});


