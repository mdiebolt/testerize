analyticsToken = "UA-32516600-1"

window._gaq ||= []
_gaq.push(['_setAccount', analyticsToken])
_gaq.push(['_trackPageview'])

do ->
  ga = document.createElement('script')
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = ( if 'https:' == document.location.protocol then 'https://ssl' else 'http://www') + '.google-analytics.com/ga.js'
  s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ga, s)

window.trackEmail = (email) ->
  _gaq.push ['_setCustomVar',
    1                # This custom var is set to slot #1.  Required parameter.
    'Email Address'  # The name of the custom variable.  Required parameter.
    email            # The value of the custom variable.  Required parameter.
    1                # Sets the scope to visitor-level.  Optional parameter.
  ]

window.trackPrice = (price) ->
  _gaq.push ['_setCustomVar',
    2                # This custom var is set to slot #1.  Required parameter.
    'Price Clicked'  # The name of the custom variable.  Required parameter.
    price            # The value of the custom variable.  Required parameter.
    1                # Sets the scope to visitor-level.  Optional parameter.
  ]
