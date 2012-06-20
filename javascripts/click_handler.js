(function() {

  $(function() {
    var closeModal, openModal, template, thanks, toggleModal;
    if ((template = window.location.search.split('=')[1]) != null) {
      $('html').addClass("" + template);
    } else {
      $('html').addClass('default');
    }
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
    $(".findOut, .radical").click(function() {
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
