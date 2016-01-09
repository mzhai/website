QUnit.module('JSHint - controllers');
QUnit.test('controllers/map.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'controllers/map.js should pass jshint.\ncontrollers/map.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/map.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
