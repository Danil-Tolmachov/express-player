let loadZone = document.querySelector('#load-panel');


function loadDragoverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function loadDropHandler(e) {
  e.preventDefault();
  if(e.dataTransfer.items[0].kind !== 'file') {
    alert('This zone is used to upload new files!');
    return;
  }

  let file = e.dataTransfer.items[0].getAsFile()

  let formData = new FormData();

  formData.append('file', file);
  formData.append('fileName', file.name);

  $.ajax({
    url: '/api',
    contentType: 'multipart/form-data',
    method: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  });
}


loadZone.addEventListener('dragover', loadDragoverHandler);
loadZone.addEventListener('drop', loadDropHandler);

