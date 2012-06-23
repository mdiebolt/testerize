updateCopy = (html, selector) ->
  $(selector).html(html)

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
  { source: '.edit .basic_features', destination: '.pricing_option .basic_features' }
  { source: '.edit .professional_features', destination: '.pricing_option .professional_features' }
  { source: '.edit .enterprise_features', destination: '.pricing_option .enterprise_features' }
]

contentMap.each (obj) ->
  $(obj.source).on 'keyup', (e) ->
    updateCopy($(e.currentTarget).val(), obj.destination)

    plans = [
      '.pricing_option .basic_plan'
      '.pricing_option .professional_plan'
      '.pricing_option .enterprise_plan'
    ]

    if plans.include obj.destination
      if amount = $(e.currentTarget).val().match(/\d+/).first()
        $(obj.destination).parent().attr('data-price', amount)

# Populate Edit form on load
$ ->
  contentMap.each (obj) ->
    $(obj.source).val($(obj.destination).html().trim().replace(/\n\s*/g, ' '))
