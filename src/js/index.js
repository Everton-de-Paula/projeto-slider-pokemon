/*Obejtivo 1 - quando clicarmos na seta avançar, temos que mostrar o próximo cartão da lista!
  passo 1 - dar um jeito de pegar o elemento html da seta avançar;
  passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar;
  passo 3 - fazer aparecer o próximo cartão da lista;
  passo 4 - mostrar o cartão selecionado e esconder o restante;

  Objetivo 2 - quando clicarmos na seta voltar, temos que mostrar o cartão anterior da lista!
  passo 1 - dar um jeito de pegar o elemento html da seta voltar;
  passo 2 - dar um jeito de identificar o clique do usuário na seta voltar;
  passo 3 - fazer aparecer o cartão anterior da lista;
  passo 4 - mostrar o cartão selecionado e esconder o restante;
  */

const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')

let cartaoAtual = 0

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado')
  cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add('selecionado')
}

btnAvancar.addEventListener('click', function () {
  if (cartaoAtual === cartoes.length - 1) return

  esconderCartaoSelecionado()

  cartaoAtual++
  mostrarCartao(cartaoAtual)
})

btnVoltar.addEventListener('click', function () {
  if (cartaoAtual === 0) return

  esconderCartaoSelecionado()

  cartaoAtual--
  mostrarCartao(cartaoAtual)
})
