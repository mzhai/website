define('may/components/travel-map', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({

    getMapPlotObject: function getMapPlotObject(latitude, longitude) {
      var plotObject = {
        type: "svg",
        path: "M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z    M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8   C312.4,216.8,287.2,242.2,256,242.2z",
        width: 6,
        height: 10,
        latitude: latitude,
        longitude: longitude,
        attrs: {
          opacity: 1,
          fill: "#FFFFFF"
        }
        // attrsHover: {
        //   transform : "s1.5"
        // }
      };
      return plotObject;
    },

    initializeMap: function initializeMap() {
      $(".map-container").mapael({
        map: {
          name: "world_countries",
          zoom: {
            enabled: true,
            maxLevel: 10,
            mousewheel: true,
            touch: true
          },
          defaultArea: {
            attrs: {
              fill: "#f4f4e8",
              stroke: "#ced8d0"
            },
            attrsHover: {
              fill: "#a4e100"
            },
            text: {
              attrs: {
                fill: "#505444"
              },
              attrsHover: {
                fill: "#000"
              }
            }
          }
        },
        plots: {
          "Paris": this.getMapPlotObject(48.856614, 2.352222)
          // 'Limoge' : this.getMapPlotObject(45.8188276, 1.1060351)
        }
      });
    },

    didInsertElement: function didInsertElement() {
      Ember['default'].run.later(this, function () {
        this.initializeMap();
      });
    }

  });

});