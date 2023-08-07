let items = document.querySelectorAll('.drop-item');
let player = document.querySelector('#player');

function panelDragStart(e) {
  this.style.opacity = '0.4';
  e.dataTransfer.setData('src', this.getAttribute('src'))
}


function panelDragEnd(e) {
  this.style.opacity = '1';
}

function playerDragoverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function playerDropHandler(e) {
  e.preventDefault();
  if(e.dataTransfer.items[0].kind == 'file') {
    alert(e.dataTransfer.items[0].path);
  }
  let src = e.dataTransfer.getData('src');
  this.setAttribute('src', src);
}

items.forEach((item) => {
  item.addEventListener("dragstart", panelDragStart);
  item.addEventListener('dragend', panelDragEnd);
});

player.addEventListener('dragover', playerDragoverHandler);
player.addEventListener('drop', playerDropHandler);
