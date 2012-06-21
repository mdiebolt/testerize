(function() {

  $('.edit').on('keyup', '.title', function() {
    var title;
    title = $(this).val();
    return $('header .title').text(title);
  });

  $('.edit').on('keyup', '.paragraph1', function() {
    var title;
    title = $(this).val();
    return $('.pitch .paragraph1').text(title);
  });

  $('.edit').on('keyup', '.paragraph2', function() {
    var title;
    title = $(this).val();
    return $('.pitch .paragraph2').text(title);
  });

  $('.edit').on('keyup', '.paragraph3', function() {
    var title;
    title = $(this).val();
    return $('.pitch .paragraph3').text(title);
  });

  $('.edit').on('keyup', '.basic_plan', function() {
    var cost;
    cost = $(this).val();
    return $('.pricing_option .basic_plan').text(cost);
  });

  $('.edit').on('keyup', '.basic_features', function() {
    var feature, features, li, _i, _len, _results;
    features = $(this).val().split(',');
    $('.pricing_option .basic_plan').next().empty();
    _results = [];
    for (_i = 0, _len = features.length; _i < _len; _i++) {
      feature = features[_i];
      li = "<li>" + feature + "</li>";
      _results.push($('.pricing_option .basic_plan').next().append(li));
    }
    return _results;
  });

  $('.edit').on('keyup', '.professional_plan', function() {
    var cost;
    cost = $(this).val();
    return $('.pricing_option .professional_plan').text(cost);
  });

  $('.edit').on('keyup', '.professional_features', function() {
    var feature, features, li, _i, _len, _results;
    features = $(this).val().split(',');
    $('.pricing_option .professional_plan').next().empty();
    _results = [];
    for (_i = 0, _len = features.length; _i < _len; _i++) {
      feature = features[_i];
      li = "<li>" + feature + "</li>";
      _results.push($('.pricing_option .professional_plan').next().append(li));
    }
    return _results;
  });

  $('.edit').on('keyup', '.enterprise_plan', function() {
    var cost;
    cost = $(this).val();
    return $('.pricing_option .enterprise_plan').text(cost);
  });

  $('.edit').on('keyup', '.enterprise_features', function() {
    var feature, features, li, _i, _len, _results;
    features = $(this).val().split(',');
    $('.pricing_option .enterprise_plan').next().empty();
    _results = [];
    for (_i = 0, _len = features.length; _i < _len; _i++) {
      feature = features[_i];
      li = "<li>" + feature + "</li>";
      _results.push($('.pricing_option .enterprise_plan').next().append(li));
    }
    return _results;
  });

  $('footer').on('click', '.edit_toggle', function(e) {
    e.preventDefault();
    return $('.edit').toggle();
  });

}).call(this);
