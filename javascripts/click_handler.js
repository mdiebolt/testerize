(function() {
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

  $(function() {
    window.params = location.search.split("?").last().split("&").eachWithObject({}, function(item, obj) {
      var key, val, _ref;
      _ref = item.split('='), key = _ref[0], val = _ref[1];
      if (key !== '') {
        return obj[key] = val;
      }
    });
    $('html').addClass(params.template || 'default');
    $('.edit').toggle(params.edit != null);
    $('.overlay').on('click', function(e) {
      return closeModal();
    });
    $('.pricing_option').on('mousedown', function(e) {
      var paypalButton;
      $('.email_modal input').attr('data-price', $(e.currentTarget).data('price'));
      if ($(e.currentTarget).is('form input[type="image"]')) {
        return;
      }
      if ((paypalButton = $(e.currentTarget).find('form input[type="image"]')).length) {
        return paypalButton.click();
      } else {
        return openModal();
      }
    });
    $('.findOut, .radical').on('click', function(e) {
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
