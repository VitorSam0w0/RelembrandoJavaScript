function CadastroDeProdutos(Produto) {
    console.log("Nome: " + Produto.nome)
    console.log("Valor: " + Produto.valor)
    console.log("Codigo: " + Produto.codigo)
}


function RegistrarProduto() {
    const NomeDoProduto = document.getElementById('NomeDoProduto').value
    const ValorDoProduto = document.getElementById('ValorDoProduto').value
    const ValorDoProdutoFloat = parseFloat(ValorDoProduto)
    const CodigoDoProduto = document.getElementById('CodigoDoProduto').value
    const CodigoDoProdutoFloat = parseFloat(CodigoDoProduto)

    const DadosDoProduto = {
        nome: NomeDoProduto,
        valor: ValorDoProdutoFloat,
        codigo: CodigoDoProdutoFloat
    }
    CadastroDeProdutos(DadosDoProduto)

    localStorage.setItem('NomeDoProduto' , NomeDoProduto)
    localStorage.setItem('ValorDoProdutoFloat' , ValorDoProdutoFloat)
    localStorage.setItem('CodigoDoProdutoFloat' , CodigoDoProdutoFloat)

    EnviarParaEstoque(NomeDoProduto, ValorDoProduto, CodigoDoProduto)

}

    function EnviarParaEstoque() {
        const NomeDoProduto = localStorage.getItem('NomeDoProduto')
        const ValorDoProduto = parseFloat(localStorage.getItem('ValorDoProdutoFloat'))
        const CodigoDoProduto = parseFloat(localStorage.getItem('CodigoDoProdutoFloat'))

        CadastrarProdutosNoEstoque(NomeDoProduto, ValorDoProduto, CodigoDoProduto)
    }