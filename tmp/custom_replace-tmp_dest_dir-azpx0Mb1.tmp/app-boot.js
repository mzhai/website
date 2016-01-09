/* jshint ignore:start */

define('may/config/environment', ['ember'], function(Ember) {
  var prefix = 'may';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("may/tests/test-helper");
} else {
  require("may/app")["default"].create({"name":"may","version":"0.0.0+d8a3b083"});
}

/* jshint ignore:end */
