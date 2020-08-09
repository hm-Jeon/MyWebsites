function nightDayHandler(self){
  var target = document.querySelector('body');
  var links = document.querySelectorAll('a');
  var allElements = document.querySelectorAll('*');
  if(self.value === '나이트 모드') {
    target.style.backgroundColor='black';
    target.style.color='white';
    self.value = '기본 모드';

    var i = 0;
    for(i; i < links.length; i++){
      links[i].style.color='white';
    }

    for(i = 0; i < allElements.length; i++){
      if(allElements[i].id != "toggle"){
          allElements[i].style.borderColor = 'white';
      }
    }
  }
  else {
    target.style.backgroundColor='white';
    target.style.color='black';
    self.value = '나이트 모드';

    var i = 0;
    for(i; i < links.length; i++){
      links[i].style.color='black';
    }

    for(i = 0; i < allElements.length; i++){
      if(allElements[i].id != "toggle"){
          allElements[i].style.borderColor = 'black';
      }
    }
  }
}
