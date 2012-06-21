updateCopy = (markdownText, selector) ->
  $(selector).html(markdown.toHTML(markdownText))

updateFeatures = (features, selector) ->
  $(selector).next().empty()

  for feature in features
    li = "<li>#{feature}</li>"

    $(selector).next().append(li)

contentMap =
  '.edit .title': 'header .title'
  '.edit .paragraph1': '.pitch .paragraph1'
  '.edit .paragraph2': '.pitch .paragraph2'
  '.edit .paragraph3': '.pitch .paragraph3'
  '.edit .paragraph2_header': '.pitch .paragraph2_header'
  '.edit .paragraph3_header': '.pitch .paragraph3_header'
  '.edit .basic_plan': '.pricing_option .basic_plan'
  '.edit .professional_plan': '.pricing_option .professional_plan'
  '.edit .enterprise_plan': '.pricing_option .enterprise_plan'

featuresMap =
  '.edit .basic_features': '.pricing_option .basic_plan'
  '.edit .professional_features': '.pricing_option .professional_plan'
  '.edit .enterprise_features': '.pricing_option .enterprise_plan'

$.each contentMap, (source, destination) ->
  $(source).on 'keyup', (e) ->
    updateCopy($(e.currentTarget).val(), destination)

$.each featuresMap, (source, destination) ->
  $(source).on 'keyup', (e) ->
    updateFeatures($(e.currentTarget).val().split(','), destination)

# Toggle Edit
$('footer').on 'click', '.edit_toggle', (e) ->
  e.preventDefault()

  $('.edit').toggle()
