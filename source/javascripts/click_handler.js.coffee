$ ->
  $(document).on 'click', (e) ->
    return if $(e.currentTarget).is('.email_modal, .email_modal > *')

    $('.email_modal').hide()
    $('.overlay').hide()

  $('.pricing_option').on 'mousedown', (e) ->
    $(e.currentTarget).attr 'class', 'pricing_option active'

  $('.pricing_option').on 'mouseup', (e) ->
    $(e.currentTarget).attr 'class', 'pricing_option'
    $('.email_modal').show()
    $('.overlay').show()

  $('.track_email').on 'click', (e) ->
    return if $(e.currentTarget).trim().val() is ''

    trackEmail($('.email').val())
    trackPrice(0)

    $('.email').val('')
