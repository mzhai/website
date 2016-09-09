import Ember from 'ember';

export default Ember.Controller.extend({
  initialize: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('.fullpage').fullpage();




  // var theWindow        = $(window),
  //     $bg              = $(".image"),
  //     aspectRatio      = $bg.width() / $bg.height();

  // function resizeBg() {
  //   console.log("resize");

  //   if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
  //       $bg
  //         .removeClass()
  //         .addClass('fullheight');
  //   } else {
  //       $bg
  //         .removeClass()
  //         .addClass('fullwidth');
  //   }

  // }

  // theWindow.resize(resizeBg).trigger("resize");





    });
  }.on('init')
});
