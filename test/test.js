
var baseURL = require('../');
var assert = require('assert');

describe('baseURL()', function () {
  var base;

  afterEach(function () {
    if (base) {
      // clean up...
      base.parentNode.removeChild(base);
      base = null;
    }
  });

  it('should return the "origin" of the host page', function () {
    var pathArray = location.href.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var origin = protocol + '//' + host;

    var url = baseURL();
    assert.equal(url, origin + '/');
  });

  it('should return the "href" of the BASE element on the page', function () {
    base = document.createElement('base');
    base.href = 'http://n8.io/images/';
    document.head.appendChild(base);

    var url = baseURL();
    assert.equal(url, base.href);
  });

  it('should accept a "relative to" string', function () {
    base = document.createElement('base');
    base.href = 'http://n8.io/images/';
    document.head.appendChild(base);

    // relative
    var url = baseURL('foo');
    assert.equal(url, 'http://n8.io/images/foo');

    // root-relative
    url = baseURL('/foo');
    assert.equal(url, 'http://n8.io/foo');
  });

});
