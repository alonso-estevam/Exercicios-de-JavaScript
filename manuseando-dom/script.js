( () => { 
    const criarTarefa = (evento) => {

    evento.preventDefault() /* Para prevenir o comportamento padrão do formulário de enviar os dados */

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const tarefa = document.createElement('li') /* Método para criar elementos */   
    tarefa.classList.add('task') /* A propriedade classList.add() coloca classe dentro de elementos */
    const conteudo = `<p class="content">${valor}</p>` /* Isso é um template que já pega o valor do input */

    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " " /* Isso vai limpar o valor do campo, trocando todo seu conteudo por um espaço em branco. */

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const botaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa  = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
}

}) ()