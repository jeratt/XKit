//* TITLE Scroll To Bottom **//
//* VERSION 1.5 REV E **//
//* DESCRIPTION Scroll to the bottom of long lists, like the post queue. **//
//* DEVELOPER jeratt **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.scroll_to_bottom = new Object({

  running: false,
  activated: false,
  
  post_listener: function() {
    if (XKit.extensions.scroll_to_bottom.activated === true) {
      $("body, html").scrollTop($(".l-container").height());
    }
  },
  
  toggle: function() {
    XKit.extensions.scroll_to_bottom.activated = !XKit.extensions.scroll_to_bottom.activated;
    if (XKit.extensions.scroll_to_bottom.activated) {
      $("body, html").scrollTop($(".l-container").height());
      $('#return_to_bottom').addClass("activated");
      $("#return_to_bottom_bar").show();
    } else {
      $('#return_to_bottom').removeClass("activated");
      $("#return_to_bottom_bar").hide();
    }
  },
  
  run: function() {
    if ($('.post_container').length < 1) { return; }
    XKit.post_listener.add("scroll_to_bottom", XKit.extensions.scroll_to_bottom.post_listener);
    XKit.tools.init_css("scroll_to_bottom");

    var button = $('<div class="elevator-wrapper visible" id="return_to_bottom"><div class="elevator"></div></div>').appendTo("body");
    button.click(this.toggle);
    $('<div id="return_to_bottom_bar"></div>').appendTo("body").hide();

    this.running = true;
  },
  
  destroy: function() {
    XKit.post_listener.remove("scroll_to_bottom");
    XKit.tools.remove_css("scroll_to_bottom");
    $("#return_to_bottom").remove();
    $("#return_to_bottom_bar").remove();
    this.running = false;
  }

});
