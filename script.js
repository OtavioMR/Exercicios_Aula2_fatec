const criar_tarefa = document.getElementById("criar_tarefa");
const mostrar_tarefas = document.getElementById("mostrar_tarefas");

function adicionarTarefa() {
    const listarTarefa = criar_tarefa.value.trim();
            
    if (listarTarefa !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${listarTarefa}</span>`;

        li.addEventListener("click", function(){
            li.classList.toggle("concluida");
        });

        mostrar_tarefas.appendChild(li);
        criar_tarefa.value = "";
    }
}