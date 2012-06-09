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
      var input;
      input = $(this).prev();
      if ((typeof $this !== "undefined" && $this !== null ? $this.val().trim() : void 0) === '') {
        return;
      }
      trackEmail(input.val().trim());
      trackPrice(input.data('price'));
      input.val('');
      closeModal();
      return thanks();
    });
  });

}).call(this);
