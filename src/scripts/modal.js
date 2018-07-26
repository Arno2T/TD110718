function modal() {
    const backModal = document.createElement('div');
    backModal.id = 'backModal'
    const div = document.createElement('div');
    div.className = 'synopsis';
    div.id = "modal";
    const description= document.createElement('div');
    description.id='description';
    const imgModal = document.createElement('img');
    imgModal.src = this.url;
    const synopsis = document.createElement('p');
    synopsis.innerText = this.synopsis;
    description.appendChild(imgModal);
    description.appendChild(synopsis);
    const titleModal = document.createElement('h4');
    titleModal.innerText = this.title;
    const closeButton = document.createElement('button');
    closeButton.id = 'close';
    closeButton.innerText = 'Close';
    closeButton.onclick = close;
    div.appendChild(titleModal);
    div.appendChild(description);
    div.appendChild(closeButton);
    backModal.appendChild(div);
    document.getElementById('poster').appendChild(backModal);
    document.addEventListener('keydown',escapeKeyListener);
}

function close() {
    document.getElementById('poster').removeChild(document.getElementById('backModal'));
    document.removeEventListener('keydown', escapeKeyListener);
}

function escapeKeyListener(event){
    if (event.keyCode===27){
        close();
    }
}
