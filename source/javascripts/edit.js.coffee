$('.edit').on 'keyup', '.title', ->
  title = $(this).val()

  $('header .title').text(title)

$('.edit').on 'keyup', '.paragraph1', ->
  title = $(this).val()

  $('.pitch .paragraph1').text(title)

$('.edit').on 'keyup', '.paragraph2', ->
  title = $(this).val()

  $('.pitch .paragraph2').text(title)

$('.edit').on 'keyup', '.paragraph3', ->
  title = $(this).val()

  $('.pitch .paragraph3').text(title)

$('.edit').on 'keyup', '.basic_plan', ->
  cost = $(this).val()

  $('.pricing_option .basic_plan').text(cost)

$('.edit').on 'keyup', '.basic_features', ->
  features = $(this).val().split(',')

  $('.pricing_option .basic_plan').next().empty()

  for feature in features
    li = "<li>#{feature}</li>"

    $('.pricing_option .basic_plan').next().append(li)

$('.edit').on 'keyup', '.professional_plan', ->
  cost = $(this).val()

  $('.pricing_option .professional_plan').text(cost)

$('.edit').on 'keyup', '.professional_features', ->
  features = $(this).val().split(',')

  $('.pricing_option .professional_plan').next().empty()

  for feature in features
    li = "<li>#{feature}</li>"

    $('.pricing_option .professional_plan').next().append(li)

$('.edit').on 'keyup', '.enterprise_plan', ->
  cost = $(this).val()

  $('.pricing_option .enterprise_plan').text(cost)

$('.edit').on 'keyup', '.enterprise_features', ->
  features = $(this).val().split(',')

  $('.pricing_option .enterprise_plan').next().empty()

  for feature in features
    li = "<li>#{feature}</li>"

    $('.pricing_option .enterprise_plan').next().append(li)

$('footer').on 'click', '.edit_toggle', (e) ->
  e.preventDefault()

  $('.edit').toggle()
