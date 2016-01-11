QUnit.module('JSHint - routes');
QUnit.test('routes/map.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/map.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
