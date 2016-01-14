import Ember from 'ember';

export default Ember.Component.extend({
  initializeMap: function() {
    var dat = this;

    // to do list
    // 1. make map always full screen
    // 2. make plane animation
    // 3. update tooltip and zoom css
    // 4. create page of pictures

    //this is for cropping the whitesapce from the svgs
    // var svg = document.getElementsByTagName("svg")[0];
    // if (svg) {
    //   var bbox = svg.getBBox();
    //   var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
    //   svg.setAttribute("viewBox", viewBox);
    // }


    // $(".test").mouseenter(function() {
    //   // $(".test").css({"transform" : "scale(1.5)"});
    // });

    // $(".test").mouseleave(function() {
    //   // $(".test").css({"transform" : "scale(1)"});
    // });

    $(".map-container").mapael({
      map : {
        name : "world_countries",
        zoom : {
            enabled : true,
            maxLevel : 10,
            mousewheel: true,
            touch: true
        },
        defaultArea: {
          attrs : {
            fill : "#f4f4e8",
            stroke: "#ced8d0"
          },
          attrsHover : {
            fill: "#f4f4e8"
          }
        },
        defaultPlot: {
          type: "svg",
          path: "M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z    M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8   C312.4,216.8,287.2,242.2,256,242.2z",
          width: "6",
          height: "9",
          attrs: {
            opacity : 1,
            fill: "#000000",
            name: "plotPoint",
            "stroke-width" : 2,
            stroke: "#000000"
          },
          attrsHover : {
            // "stroke-width": 26,
            stroke: "#00FF00",
            fill: "#00FF00"
          },
          eventHandlers: {
            // mouseover: function (e, id, mapElem, textElem, elemOptions) {
            //   console.log(arguments);
            //   var elementObject = dat.$("[data-id=" + id + "]");
            //   elementObject.css('fill', 'green');
            //   // console.log(element.class());
            //   // element.css({
            //   //   '-webkit-transform': 'scale(1.6)',
            //   //   '-moz-transform': 'scale(1.6)',
            //   //   '-o-transform': 'scale(1.6)'
            //   // });

            // },
            // mouseenter: function(e, id, mapElem, textElem, elemOptions) {

            //   var newData = {
            //     "plots": {
            //       id : {
            //         width: "8",
            //         height: "13"
            //       }
            //     }
            //   };
            //   $(".map-container").trigger('update', [newData]);
            //   // $("[data-id=paris]");
            //   // var elementObject = dat.$("[data-id=" + id + "]");
            //   // elementObject.css({
            //   //   "transform" : "scale(1.5)",
            //   //   "transform-origin" : "0 0",
            //   //   "top" : "0",
            //   //   "left" : "0"
            //   //   // '-webkit-transform': 'scale(1.6)',
            //   //   // '-moz-transform': 'scale(1.6)',
            //   //   // '-o-transform': 'scale(1.6)'
            //   // });
            //   console.log("enter");
            // },
            // mouseleave: function(e, id, mapElem, textElem, elemOptions) {
            //   var elementObject = dat.$("[data-id=" + id + "]");
            //   elementObject.css({
            //     "transform" : "scale(1)",
            //     "transform-origin" : "0 0",
            //     "top" : "0",
            //     "left" : "0"
            //     // '-webkit-transform': 'scale(1)',
            //     // '-moz-transform': 'scale(1)',
            //     // '-o-transform': 'scale(1)'
            //     // ''
            //   });
            //   console.log("exit");
            // }

          }
        }
      },
      plots : {
        "paris": {
          latitude: 48.856614,
          longitude: 2.352222,
          tooltip: {
            content : "Paris, France"
          }
        },
        "washingtonDC": {
          latitude: 38.907192,
          longitude: -77.036871,
          tooltip: {
            content : "Washington, D.C."
          }
        },
        "lima": {
          latitude: -12.046374,
          longitude: -77.042793,
          tooltip: {
            content : "Lima, Peru"
          }
        }
      }
    });

    // for now this is okay
    // to do: resize the svg height when window height is resized
    var mapHeight = $(".map").height();
    $(".map > svg").height(mapHeight);
    $(".map > svg").each(function () { $(this)[0].setAttribute("viewBox", "0 -100 1000 400") });

    // to do: listen for changes on viewbox, and then add the vertical offset to it

    // .setAttribute("viewBox", "0 -100 1000 400");

    // $('svg').each(function () { $(this)[0].setAttribute('viewBox', '0 0 800 400') });
    console.log("mapHeight:" + mapHeight);

  },

  didInsertElement: function(){
    Ember.run.later(this, function() {
      this.initializeMap();
    });
  }

});
