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

window.trackLead = (email, price) ->
  $.ajax "http://pixieengine.com/leads/create",
    dataType: "jsonp"
    data:
      lead:
        product: "Testerize"
        email: email
        data:
          price: price
    success: (data) ->
      # console.log(data)
