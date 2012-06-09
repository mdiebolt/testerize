(function() {

  window.checkDomainName = function(name, callback) {
    return $.ajax({
      url: "http://www.whoisxmlapi.com/whoisserver/WhoisService?domainName=" + name + "&outputFormat=json&callback=?",
      dataType: 'json',
      success: function(data) {
        var _ref;
        if (((_ref = data.WhoisRecord) != null ? _ref.dataError : void 0) === "MISSING_WHOIS_DATA") {
          return callback(true);
        } else {
          return callback(false);
        }
      }
    });
  };

  window.checkTwitterName = function(name, callback) {
    return $.ajax({
      url: "http://api.twitter.com/1/users/show.json?screen_name=" + name + "&callback=?",
      dataType: 'json',
      success: function() {
        return callback(false);
      },
      timeout: 2000,
      error: function() {
        return callback(true);
      }
    });
  };

}).call(this);
(function() {

  $(function() {
    $(document).on('click', function(e) {
      if ($(e.currentTarget).is('.email_modal, .email_modal > *')) {
        return;
      }
      $('.email_modal').hide();
      return $('.overlay').hide();
    });
    $('.pricing_option').on('mousedown', function(e) {
      return $(e.currentTarget).attr('class', 'pricing_option active');
    });
    $('.pricing_option').on('mouseup', function(e) {
      $(e.currentTarget).attr('class', 'pricing_option');
      $('.email_modal').show();
      return $('.overlay').show();
    });
    return $('.track_email').on('click', function(e) {
      if ($(e.currentTarget).trim().val() === '') {
        return;
      }
      trackEmail($('.email').val());
      trackPrice(0);
      return $('.email').val('');
    });
  });

}).call(this);
(function() {
  var analyticsToken;

  analyticsToken = "UA-32516600-1";

  window._gaq || (window._gaq = []);

  _gaq.push(['_setAccount', analyticsToken]);

  _gaq.push(['_trackPageview']);

  (function() {
    var ga, s;
    ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(ga, s);
  })();

  window.trackEmail = function(email) {
    return _gaq.push(['_setCustomVar', 1, 'Email Address', email, 1]);
  };

  window.trackPrice = function(price) {
    return _gaq.push(['_setCustomVar', 2, 'Price Clicked', price, 1]);
  };

}).call(this);
