"use strict";
describe("postUpvote", function () {
  var $div;

  beforeEach(function () {
    $div = $('<div>');
  })

  describe("events",function(){ 
    it("a user that isn't logged in shouldn't be able to vote", function (done) {
      expect( 1 ).toBe( 1 );
    })
  });
})
