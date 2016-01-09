define('may/tests/components/travel-map.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/travel-map.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'components/travel-map.js should pass jshint.\ncomponents/travel-map.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/travel-map.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});