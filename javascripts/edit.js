(function() {
  var contentMap, featureMap, updateCopy, updateFeatures;

  updateCopy = function(markdownText, selector) {
    return $(selector).html(markdown.toHTML(markdownText));
  };

  updateFeatures = function(features, selector) {
    var feature, li, _i, _len, _results;
    $(selector).next().empty();
    _results = [];
    for (_i = 0, _len = features.length; _i < _len; _i++) {
      feature = features[_i];
      li = "<li>" + feature + "</li>";
      _results.push($(selector).next().append(li));
    }
    return _results;
  };

  contentMap = {
    '.edit .title': 'header .title',
    '.edit .paragraph1': '.pitch .paragraph1',
    '.edit .paragraph2': '.pitch .paragraph2',
    '.edit .paragraph3': '.pitch .paragraph3',
    '.edit .paragraph2_header': '.pitch .paragraph2_header',
    '.edit .paragraph3_header': '.pitch .paragraph3_header',
    '.edit .basic_plan': '.pricing_option .basic_plan',
    '.edit .professional_plan': '.pricing_option .professional_plan',
    '.edit .enterprise_plan': '.pricing_option .enterprise_plan'
  };

  featureMap = {
    '.edit .basic_features': '.pricing_option .basic_plan',
    '.edit .professional_features': '.pricing_option .professional_plan',
    '.edit .enterprise_features': '.pricing_option .enterprise_plan'
  };

  $.each(contentMap, function(source, destination) {
    return $(source).on('keyup', function(e) {
      return updateCopy($(e.currentTarget).val(), destination);
    });
  });

  $.each(featureMap, function(source, destination) {
    return $(source).on('keyup', function(e) {
      return updateFeatures($(e.currentTarget).val().split(','), destination);
    });
  });

  $('footer').on('click', '.edit_toggle', function(e) {
    e.preventDefault();
    return $('.edit').toggle();
  });

  $(function() {
    $.each(contentMap, function(source, destination) {
      return $(source).val($(destination).text().trim());
    });
    return $.each(featureMap, function(source, destination) {
      return $(source).val($(destination).next().text().trim().replace(/\n\s*/g, ', '));
    });
  });

}).call(this);
