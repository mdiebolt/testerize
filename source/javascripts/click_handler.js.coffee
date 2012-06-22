openModal = ->
  toggleModal true

closeModal = ->
  toggleModal false

toggleModal = (val) ->
  $('.email_modal').toggle(val)
  $('.overlay').toggle(val)

thanks = ->
  $('.thanks_message').show()

  setTimeout ->
    $('.thanks_message').fadeOut 200
  , 3000

$ ->
  window.params = location.search.split("?").last().split("&").eachWithObject {}, (item, obj) ->
    [key, val] = item.split '='

    obj[key] = val unless key is ''

  $('html').addClass params.template || 'default'
  $('.edit').toggle(params.edit?)

  $('.overlay').on 'click', (e) ->
    closeModal()

  $('.pricing_option').on 'mousedown', (e) ->
    $('.email_modal input').attr('data-price', $(e.currentTarget).data('price'))

    return if $(e.currentTarget).is('form input[type="image"]')

    if (paypalButton = $(e.currentTarget).find('form input[type="image"]')).length
      paypalButton.click()
    else
      openModal()

  $('.findOut, .radical').on 'click', (e) ->
    openModal()

  $('.track_email').on 'click', (e) ->
    input = $(this).prev()

    email = input.val().trim()
    price = input.data('price')

    trackLead email, price

    input.val('')
    closeModal()
    thanks()
