//adicionar tarefa

    // Adicionando os elementos 
var Todoformulario = document.getElementById('formulario')
var todoInput=document.getElementById('input')
var Lista= document.getElementById('lista')
function addItem(event){
    event.preventDefault()

    // pegar o valor do input
    const Valor = todoInput.value.trim();
    if (Valor !== ''){
        const li = document.createElement('li');
        li.textContent = Valor;
    


        // remover A tarefa
        const deletar =
        document.createElement('button');
        deletar.textContent = 'apagar';
        deletar.classList.add('delete');
        li.appendChild(deletar);
        deletar.id = "botaoapagar";

        //  funçao de completar a tarefa

        li.addEventListener('click', function(){
            li.classList.toggle('feito')
        })

        deletar.addEventListener('click', function() {
            Lista.removeChild(li);
        });
        Lista.appendChild(li);
        todoInput.value = '';
  
        //completar

        const completar = document.createElement('button');
        completar.textContent = 'Completar';
        completar.classList.add('completar');
        li.appendChild(completar);

        // evento de completar 
        completar.addEventListener('click', function() {
            li.style.color = "green"; 
            li.style.textDecoration = "line-through";
            li.textContent = Valor + " ✅"; })
            completar.id = "botaocompletar";
    }
}
        
Todoformulario.addEventListener('submit',addItem );