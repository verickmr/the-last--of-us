/*
objetivo-mostrar a imagem correspondente ao botão
passo1-importar os botoes do html
passo2-selecionar o botão a apartir do click do usuario
passo3-desselecionar o botão anterior
passo4-marcar o botão clicado com selecionado
passo5-escoder imagem anterior
passo6-mostrar o botão correspodente a imagem
*/
//passo1-importar os botoes do html
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//passo2-selecionar o botão a apartir do click do usuario
botoescarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
        console.log(indice)
        //passo3-desselecionar o botão anterior
        desativarbotaoselecionado();
        //passo4-marcar o botão clicado com selecionado
        botao.classList.add('selecionado');
        //passo5-escoder imagem anterior
        esconderimagem();
        ///passo6-mostrar o botão correspodente a imagem
        console.log(imagens);
        imagens[indice].classList.add('ativa');
    })
}) 

function esconderimagem() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado')
}
