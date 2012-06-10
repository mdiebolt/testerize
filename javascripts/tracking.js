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

  window.trackLead = function(email, price) {
    return $.ajax("http://pixieengine.com/leads/create", {
      dataType: "jsonp",
      data: {
        lead: {
          product: "Testerize",
          email: email,
          data: {
            price: price
          }
        }
      },
      success: function(data) {}
    });
  };

}).call(this);
