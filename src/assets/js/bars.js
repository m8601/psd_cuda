const list = document.querySelector('#skills');
const doc = document.querySelector('body');
let listOffset = getCoords(list);
listOffset.top -= 300;

function getCoords(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}


window.onload = function onLoad() {
  console.log(listOffset);
  var web = new ProgressBar.Circle('#web-design', {
    color: '#30bae7',
    duration: 3000,
    easing: 'easeInOut',
    strokeWidth: 5,
    text: {
      value: '90%',
      className: 'skills__label',
    }
  });
  var html = new ProgressBar.Circle('#html', {
    color: '#d74680',
    duration: 3000,
    easing: 'easeInOut',
    strokeWidth: 5,
    text: {
      value: '75%',
      className: 'skills__label',
    }
  });
  var graphic = new ProgressBar.Circle('#graphic', {
    color: '#15c7a8',
    duration: 3000,
    easing: 'easeInOut',
    strokeWidth: 5,
    text: {
      value: '70%',
      className: 'skills__label',
    }
  });
  var ui = new ProgressBar.Circle('#ui', {
    color: '#eb7d4b',
    duration: 3000,
    easing: 'easeInOut',
    strokeWidth: 5,
    text: {
      value: '85%',
      className: 'skills__label',
    }
  });
  document.addEventListener('scroll', () => {
    if (window.pageYOffset > listOffset.top){
      web.animate(0.9);
      html.animate(0.75);
      graphic.animate(0.7);
      ui.animate(0.85);
      
    }
  })
};

