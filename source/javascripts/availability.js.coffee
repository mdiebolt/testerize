window.checkDomainName = (name, callback) ->
  $.ajax
    url: "http://www.whoisxmlapi.com/whoisserver/WhoisService?domainName=#{name}&outputFormat=json&callback=?"
    dataType: 'json'
    success: (data) ->
      if data.WhoisRecord?.dataError is "MISSING_WHOIS_DATA"
        callback(true)
      else
        callback(false)

window.checkTwitterName = (name, callback) ->
  $.ajax
    url: "http://api.twitter.com/1/users/show.json?screen_name=#{name}&callback=?"
    dataType: 'json'
    success: -> callback(false)
    timeout: 2000 # This is a hack because Twitter returns 404 which won't call any jsonp
    error: ->
      callback(true)
