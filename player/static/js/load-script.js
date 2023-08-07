let loadZone = document.querySelector('#load-panel');


function loadDragoverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function loadDropHandler(e) {
  e.preventDefault();
  if(e.dataTransfer.items[0].kind !== 'file') {
    alert('This zone is used to upload files, not already uploaded!');
    return;
  }
  let src = e.dataTransfer.getData('src');
  this.setAttribute('src', src);
}


loadZone.addEventListener('dragover', loadDragoverHandler);
loadZone.addEventListener('drop', loadDropHandler);

