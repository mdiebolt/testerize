$ ->
  if (template = window.location.search.split('=')[1])?
    $('html').addClass("#{template}")
  else
    $('html').addClass('default')

  openModal = ->
    toggleModal(true)

  closeModal = ->
    toggleModal(false)

  toggleModal = (val) ->
    $('.email_modal').toggle(val)
    $('.overlay').toggle(val)

  thanks = ->
    $('.thanks_message').show()

    setTimeout ->
      $('.thanks_message').fadeOut(200)
    , 3000

  $('.overlay').on 'click', (e) ->
    closeModal()

  $('.pricing_option').on 'mousedown', (e) ->
    $(e.currentTarget).attr 'class', 'pricing_option active'
    $('.email_modal input').attr('data-price', $(e.currentTarget).data('price'))

  $('.pricing_option').on 'mouseup', (e) ->
    $(e.currentTarget).attr 'class', 'pricing_option'
    openModal()

  $("img").click ->
    openModal()

  $('.track_email').on 'click', (e) ->
    input = $(this).prev()

    email = input.val().trim()
    price = input.data('price')

    trackLead email, price

    input.val('')
    closeModal()
    thanks()
