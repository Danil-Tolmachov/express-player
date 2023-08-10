
document.addEventListener('DOMContentLoaded', () => {
  $.ajax({
    url: '/api/video',
    method: 'get',
    success: successGet,
  });

  function successGet(data) {
    let panel = document.querySelector('#panel');

    for (let [key, value] of Object.entries(data)) {
      let element = document.createElement('div');

      let innerText = document.createElement('p');
      innerText.textContent = value.name;

      element.setAttribute('class', "drag-item");
      element.setAttribute('src', value.src);
      element.draggable = "true";

      element.appendChild(innerText);
      panel.appendChild(element);
    }

    let items = document.querySelectorAll('.drag-item');

    items.forEach((item) => {
      
      item.addEventListener("dragstart", itemDragStart);
      item.addEventListener('dragend', itemDragEnd);
      
    });
  }
});

function itemDragStart(e) {
  this.style.opacity = '0.4'
  e.dataTransfer.setData('src', this.getAttribute('src'))
}


function itemDragEnd(e) {
  this.style.opacity = '1';
}
