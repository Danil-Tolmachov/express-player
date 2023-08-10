document.addEventListener('DOMContentLoaded', () => {
  let player = document.querySelector('#player');

  function playerDragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }

  function playerDropHandler(e) {
    e.preventDefault();

    if (e.dataTransfer.items.length > 0 &&
        e.dataTransfer.items[0].kind == 'file') {

      alert(e.dataTransfer.items[0].path);
    }

    let src = e.dataTransfer.getData('src');
    this.setAttribute('src', src);
  }

  player.addEventListener('dragover', playerDragoverHandler);
  player.addEventListener('drop', playerDropHandler);
});
