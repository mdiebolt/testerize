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
