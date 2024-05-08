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
    let imgCheck = 'images/marca-de-verificacao.png'
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
      task += `<img src="${imgCheck}">`
      task += `</div>`;
      task += `<p>${descriptionTask.value}</p>`
      task += '</div>';

      tasks += task;
        
      contentTask.innerHTML = tasks;
      count.innerHTML = `${countNumber++}`;

      titleTask.value = '';
      descriptionTask.value = '';
    })
  