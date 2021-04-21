const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function botao() {

    let meuItem = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtnD = document.createElement('button');
    const listBtnAtt = document.createElement('button');


    listBtnD.className = "btn btn-outline-danger";
    listBtnAtt.className = "btn btn-outline-info";
    listText.className = "mb-5 mr3";
    listItem.className = "mb-2";

    listItem.appendChild(listText);
    listText.textContent = meuItem;
    listItem.appendChild(listBtnD);
    listBtnD.textContent = 'Deletar';
    listItem.appendChild(listBtnAtt);
    listBtnAtt.textContent = 'Atualizar Item';

    list.appendChild(listItem);

    listBtnD.onclick = function(e) {
        list.removeChild(listItem);
    }

    listBtnAtt.onclick = function(e) {
        let att = prompt("Novo Item");
        if (att != null) {
            listText.textContent = att;
        } else {
            alert("Dado inválido, tente novamente.");
        }
    }
    input.focus();
}