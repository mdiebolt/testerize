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

  contentMap = [
    {
      source: '.edit .title',
      destination: 'header .title'
    }, {
      source: '.edit .paragraph1',
      destination: '.pitch .paragraph1'
    }, {
      source: '.edit .paragraph2',
      destination: '.pitch .paragraph2'
    }, {
      source: '.edit .paragraph3',
      destination: '.pitch .paragraph3'
    }, {
      source: '.edit .paragraph2_header',
      destination: '.pitch .paragraph2_header'
    }, {
      source: '.edit .paragraph3_header',
      destination: '.pitch .paragraph3_header'
    }, {
      source: '.edit .basic_plan',
      destination: '.pricing_option .basic_plan'
    }, {
      source: '.edit .professional_plan',
      destination: '.pricing_option .professional_plan'
    }, {
      source: '.edit .enterprise_plan',
      destination: '.pricing_option .enterprise_plan'
    }
  ];

  featureMap = [
    {
      source: '.edit .basic_features',
      destination: '.pricing_option .basic_plan'
    }, {
      source: '.edit .professional_features',
      destination: '.pricing_option .professional_plan'
    }, {
      source: '.edit .enterprise_features',
      destination: '.pricing_option .enterprise_plan'
    }
  ];

  contentMap.each(function(obj) {
    return $(obj.source).on('keyup', function(e) {
      return updateCopy($(e.currentTarget).val(), obj.destination);
    });
  });

  featureMap.each(function(obj) {
    return $(obj.source).on('keyup', function(e) {
      return updateFeatures($(e.currentTarget).val().split(','), obj.destination);
    });
  });

  $('footer').on('click', '.edit_toggle', function(e) {
    e.preventDefault();
    return $('.edit').toggle();
  });

  $(function() {
    contentMap.each(function(obj) {
      return $(obj.source).val($(obj.destination).text().trim().replace(/\n\s*/g, ' '));
    });
    return featureMap.each(function(obj) {
      return $(obj.source).val($(obj.destination).next().text().trim().replace(/\n\s*/g, ', '));
    });
  });

}).call(this);
