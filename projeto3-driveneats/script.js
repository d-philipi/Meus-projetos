function selecionarprato(opcao){
    const itemselecionado = document.querySelector('.pratos .selecionado');
    const itemverificado = document.querySelector('.pratos .inativo');
    const seletor1 = '.' + opcao;
    const item = document.querySelector(seletor1);
    const seletor2 = seletor1 + ' .certo';
    const verificador = document.querySelector(seletor2);

    if (itemselecionado !== null){
        itemselecionado.classList.remove('selecionado');
    }
    if (itemverificado !== null){
        itemverificado.classList.remove('inativo');
    }

    
    item.classList.add('selecionado');
    verificador.classList.add('inativo');

}

function selecionarbebida(opcao){
    const itemselecionado = document.querySelector('.bebidas .selecionado');
    const itemverificado = document.querySelector('.bebidas .inativo');
    const seletor1 = '.' + opcao;
    const item = document.querySelector(seletor1);
    const seletor2 = seletor1 + ' .certo';
    const verificador = document.querySelector(seletor2);

    if (itemselecionado !== null){
        itemselecionado.classList.remove('selecionado');
    }
    if (itemverificado !== null){
        itemverificado.classList.remove('inativo');
    }

    
    item.classList.add('selecionado');
    verificador.classList.add('inativo');

}

function selecionarsobremesa(opcao){
    const itemselecionado = document.querySelector('.sobremesas .selecionado');
    const itemverificado = document.querySelector('.sobremesas .inativo');
    const seletor1 = '.' + opcao;
    const item = document.querySelector(seletor1);
    const seletor2 = seletor1 + ' .certo';
    const verificador = document.querySelector(seletor2);

    if (itemselecionado !== null){
        itemselecionado.classList.remove('selecionado');
    }
    if (itemverificado !== null){
        itemverificado.classList.remove('inativo');
    }

    
    item.classList.add('selecionado');
    verificador.classList.add('inativo');

}