import Ember from 'ember';

export default Ember.Component.extend({


  initializeMap: function() {
    $(".map-container").mapael({
      map : {
        name : "world_countries",
        zoom : {
            enabled : true,
            maxLevel : 10,
            mousewheel: true,
            touch: true
        }
      },
      plots : {
        // 'paris' : {
        //   type : "image",
        //   url: "assets/ionicons/location.svg",
        //   width: 6,
        //   height: 6,
        //   latitude : 48.86,
        //   longitude: 2.3444,
        //   attrs : {
        //     opacity : 1
        //   },
        //   attrsHover: {
        //     transform : "s1.5"
        //   }
        // },
        'Limoge' : {
          type : "svg",
          path: "M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z    M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8   C312.4,216.8,287.2,242.2,256,242.2z",
          width: 6,
          height: 10,
          latitude : 45.8188276,
          longitude: 1.1060351,
          attrs : {
            opacity : 1,
            fill: "#FFFFFF"
          }
        }
      }
    });

  },

  didInsertElement: function(){
    Ember.run.later(this, function() {
      this.initializeMap();
    });
  }

});
