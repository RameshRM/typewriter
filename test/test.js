var expected = require('chai').expect;

describe('add', function() {
    it('should return 3 when passed the params (1, 2)', function() {
        expected(1 + 2).to.equal(3);
    });
});

