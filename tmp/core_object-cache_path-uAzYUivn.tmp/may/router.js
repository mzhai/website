define('may/router', ['exports', 'ember', 'may/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('map');
  });

  exports['default'] = Router;

});