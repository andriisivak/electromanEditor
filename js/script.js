let objects = [document.querySelector('#tiles'), document.querySelector('#map')];

let options = {
  copy: true,
  copySortSource: false
};

let drake = dragula(objects, options);

drake.cancel(document.querySelector('#tiles'));