const botaoMostrarProjetos = document.querySelector('.btn-show-projects');
const todosProjetos = document.querySelectorAll('.project');
const projetosIniciais = 4; 
let mostrandoMais = false;

function mostrarProjetosIniciais() {
    todosProjetos.forEach((projeto, index) => {
        if (index < projetosIniciais) {
            projeto.classList.add('active');
        } else {
            projeto.classList.remove('active');
        }
    });
    botaoMostrarProjetos.textContent = 'MOSTRAR MAIS'; 
}

botaoMostrarProjetos.addEventListener('click', () => {
    mostrandoMais = !mostrandoMais;

    if (mostrandoMais) {
        todosProjetos.forEach(projeto => projeto.classList.add('active')); 
        botaoMostrarProjetos.textContent = 'MOSTRAR MENOS'; 
    } else {
        mostrarProjetosIniciais(); 
    }
});

mostrarProjetosIniciais();

export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".changeDescription");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
  });
}
