let totalGeral;
limpar();

function adicionar() {
  // recuperar valores formulário (nome, quantidade e valor)
  let produto = document.getElementById("produto").value;
  let quantidadeProduto = document.getElementById("quantidade").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.split("R$")[1];

  // calcular o preço, subtotal
  let preço = quantidadeProduto * valorProduto;

  // add o produto no carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `
  <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>
      </section>
`;

  // atualizar o valor total do carrinho
  totalGeral = totalGeral + preço;
  let total = document.getElementById("valor-total");
  total.innerHTML = `
  <span class="texto-azul" id="valor-total">R$${totalGeral}</span>
  </p>
`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
  // limpar o carrinho, o total geral, limpar valores
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$0";
}
