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
    var closeModal, openModal, thanks, toggleModal;
    openModal = function() {
      return toggleModal(true);
    };
    closeModal = function() {
      return toggleModal(false);
    };
    toggleModal = function(val) {
      $('.email_modal').toggle(val);
      return $('.overlay').toggle(val);
    };
    thanks = function() {
      $('.thanks_message').show();
      return setTimeout(function() {
        return $('.thanks_message').fadeOut(200);
      }, 3000);
    };
    $('.overlay').on('click', function(e) {
      return closeModal();
    });
    $('.pricing_option').on('mousedown', function(e) {
      $(e.currentTarget).attr('class', 'pricing_option active');
      return $('.email_modal input').attr('data-price', $(e.currentTarget).data('price'));
    });
    $('.pricing_option').on('mouseup', function(e) {
      $(e.currentTarget).attr('class', 'pricing_option');
      return openModal();
    });
    $("img").click(function() {
      return openModal();
    });
    return $('.track_email').on('click', function(e) {
      var email, input, price;
      input = $(this).prev();
      email = input.val().trim();
      price = input.data('price');
      trackLead(email, price);
      input.val('');
      closeModal();
      return thanks();
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
