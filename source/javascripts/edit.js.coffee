updateCopy = (markdownText, selector) ->
  $(selector).html(markdown.toHTML(markdownText))

updateFeatures = (features, selector) ->
  $(selector).next().empty()

  for feature in features
    li = "<li>#{feature}</li>"

    $(selector).next().append(li)

contentMap = [
  { source: '.edit .title', destination: 'header .title' }
  { source: '.edit .paragraph1', destination: '.pitch .paragraph1' }
  { source: '.edit .paragraph2', destination: '.pitch .paragraph2' }
  { source: '.edit .paragraph3', destination: '.pitch .paragraph3' }
  { source: '.edit .paragraph2_header', destination: '.pitch .paragraph2_header' }
  { source: '.edit .paragraph3_header', destination: '.pitch .paragraph3_header' }
  { source: '.edit .basic_plan', destination: '.pricing_option .basic_plan' }
  { source: '.edit .professional_plan', destination: '.pricing_option .professional_plan' }
  { source: '.edit .enterprise_plan', destination: '.pricing_option .enterprise_plan' }
]

featureMap = [
  { source: '.edit .basic_features', destination: '.pricing_option .basic_plan' }
  { source: '.edit .professional_features', destination: '.pricing_option .professional_plan' }
  { source: '.edit .enterprise_features', destination: '.pricing_option .enterprise_plan' }
]

contentMap.each (obj) ->
  $(obj.source).on 'keyup', (e) ->
    updateCopy($(e.currentTarget).val(), obj.destination)

featureMap.each (obj) ->
  $(obj.source).on 'keyup', (e) ->
    updateFeatures($(e.currentTarget).val().split(','), obj.destination)

# Populate Edit form on load
$ ->
  contentMap.each (obj) ->
    $(obj.source).val($(obj.destination).text().trim().replace(/\n\s*/g, ' '))

  featureMap.each (obj) ->
    $(obj.source).val($(obj.destination).next().text().trim().replace(/\n\s*/g, ', '))
