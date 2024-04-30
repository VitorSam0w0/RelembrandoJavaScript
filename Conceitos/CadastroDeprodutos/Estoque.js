const ProdutoNoEstoque = document.getElementById('ProdutoNoEstoque')
const ValorNoEstoque = document.getElementById('ValorNoEstoque')
const CodigoNoEstoque = document.getElementById('CodigoNoEstoque')

function CadastrarProdutosNoEstoque(nome, valor, codigo) {

    ProdutoNoEstoque.textContent = nome
    ValorNoEstoque.textContent = valor
    CodigoNoEstoque.textContent = codigo

}

EnviarParaEstoque()

