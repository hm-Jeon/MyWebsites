var body = {
  setColor: function(color) {
    $('body').css('color', color);
    $('body, h1, #websites').css('borderColor', color);
  },
  setBackgroundColor: function(color) {
    $('body').css('backgroundColor', color);
  }
}

var links = {
  setColor: function (color) {
    $('a').css('color', color);
  }
}

var button = {
  syncValue: function(mode) {
    $('.toggle').val(mode);
  },
  hover: function(bgcolor, color) {
    $(".toggle").hover(function(){
      $(this).css("backgroundColor", bgcolor);
      $(this).css("color", color);
      if($('.toggle').val() == 'Day') {
        $(this).css("borderColor", color);
      }
    },
    function(){
      $(this).css("background-color", color);
      $(this).css("borderColor", bgcolor);
      $(this).css("color", bgcolor);
    });
  }
}

function nightDayHandler(self) {
  if(self.value == 'Night') {
    body.setColor('white');
    body.setBackgroundColor('black');
    links.setColor('white');
    button.syncValue('Day');
    button.hover('white', 'black');
  }
  else {  // self.value == '기본모드'
    body.setColor('black');
    body.setBackgroundColor('white');
    links.setColor('black');
    button.syncValue('Night');
    button.hover('black', 'white');
  }
}
