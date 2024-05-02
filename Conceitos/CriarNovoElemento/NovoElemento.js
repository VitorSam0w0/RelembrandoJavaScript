function NewLi() {
    const UL = document.getElementById('NewLi')

    const NewLi = document.createElement('li')
    NewLi.className = 'list-item'
    NewLi.innerText = 'Novo texto'

    const NewInput = document.createElement('input')
    NewInput.type = 'text'
    NewInput.name = 'Novo input'

    NewLi.appendChild(NewInput)
    UL.appendChild(NewLi)
}