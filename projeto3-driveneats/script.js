let pedido = 0;
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
    pedido = 1;
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
    pedido = 2;
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
    pedido = 3;
    let botaofinalizar = document.querySelector('.finalizar-pedido .finalizar');
    const textofinalizar = document.querySelector('.finalizar-pedido .texto');

    if ( botaofinalizar === null ){
        botaofinalizar = document.querySelector('.finalizar-pedido');
        botaofinalizar.classList.add('finalizar');
        textofinalizar.innerHTML = `Fechar pedido`;
    }
}

    const mensagem ="Olá, gostaria de fazer o pedido:    - Prato: Frango Yin Yang    - Bebida: Coquinha Gelada    - Sobremesa:        PudimTotal: R$ 27.70";
    const correcao = encodeURIComponent(mensagem).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    const link = 'https://wa.me/5521976864083?text=' + correcao;
    const a = document.querySelector("#meu-link");
    a.href = link;
