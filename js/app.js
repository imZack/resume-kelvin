(function createSkillGraph() {
  var pieColor1 = "#1abc9c";
  var pieColor2 = "#ecf0f1";
  var createDoughnut = function(elem, value) {
    new Chart(elem).Doughnut([
      {
        value: value,
        color: pieColor1
      },
      {
        value: 100 - value,
        color: pieColor2
      }
    ]);
  };

  $(".skill").each(function(index, elem) {
    var elem = $(elem);
    var skillName = elem.data('name');
    var skillValue = elem.data('value');
    var classString = "col-lg-3 col-md-4 col-sm-4 centered";

    if ((index + 1) % 4 === 0) {
      classString += " col-lg-offset-3";
    }

    elem.html('<div class="' + classString + '">' +
      '<canvas id="' + skillName + '" height="130" width="130"></canvas>' + 
      '<p>' + skillName + '</p><br></div>');
    
    createDoughnut(document.getElementById(skillName).getContext("2d"),
                   skillValue);
  });
})();
