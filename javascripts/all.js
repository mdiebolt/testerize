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
