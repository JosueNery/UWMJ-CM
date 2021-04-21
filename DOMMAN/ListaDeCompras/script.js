const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {

    let meuItem = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listBtn.className = "btn btn-outline-danger";
    listText.className = "mb-5 mr3";
    listItem.className = "mb-2";

    listItem.appendChild(listText);
    listText.textContent = meuItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Deletar';

    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }
    input.focus();
}