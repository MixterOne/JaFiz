$(document).ready(function () {
    $(".toggle-nav").on("click", function () {
      var nav = $(".nice-nav");
      nav.toggleClass("open");
    });
  });
    // Modal
    var modal = document.getElementById('modal');
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Adiciona tarefa
    const btnAdd = document.querySelector('.add-task');
    let imgCheck = '<img src="./images/marca-de-verificacao.png" onclick="check(event)" alt="Check">'
    let tasks = ''
    let countNumber = 1;
    let count = document.querySelector('.count');

    btnAdd.addEventListener('click', function(e){
      e.preventDefault()
      let titleTask = document.querySelector('#titulo');
      let descriptionTask = document.querySelector('#description');
      

      const contentTask = document.querySelector('.cards-need-to-complete');

      let task = '<div class="card">'
      task += `<div class="title-task">`;
      task += `<h3>${titleTask.value}</h3>`;
      task += `${imgCheck}`
      task += `</div>`;
      task += `<p class="description">${descriptionTask.value}</p>`
      task += '</div>';
        
      contentTask.innerHTML += task; // Adiciona a nova tarefa diretamente ao HTML, sem atualizar toda a lista de tarefas
      
      function updateCount() {
        const countElement = document.querySelector('.count-need-to-completed');
        if (countElement) {
            countElement.innerHTML = parseInt(countElement.innerHTML) + 1;
        }
      }
    
      updateCount();

      titleTask.value = '';
      descriptionTask.value = '';
    })

    function check(event){
      // Obtém o elemento .card pai do elemento que acionou o evento
      const card = event.target.closest('.card');
      const description = document.querySelector('.description')

      function updateCount() {
        const countElement = document.querySelector('.count-need-to-completed');
        if (countElement) {
            countElement.innerHTML = parseInt(countElement.innerHTML) - 1;
        }
      }
    
      updateCount();

      function updateCountCompleted() {
        const countElement = document.querySelector('.count-completed');
        if (countElement) {
            countElement.innerHTML = parseInt(countElement.innerHTML) + 1;
        }
      }
    
      updateCountCompleted();

      if (card) {
          card.remove();
          const completedTasksSection = document.querySelector('.cards-completed');
          
          completedTasksSection.appendChild(card);

          card.classList.add('completed')
          description.classList.add('desc-completed')
      }
  }