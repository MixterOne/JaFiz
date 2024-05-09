$(document).ready(function () {
  $(".toggle-nav").on("click", function () {
    var nav = $(".nice-nav");
    nav.toggleClass("open");
  });
});

let imgCheck = '<img src="./images/marca-de-verificacao.png" class="btnCheckImg" onclick="check(event)" alt="Check">'
let imgCheckX = '<img src="./images/x.png" class="btnCheckImgX" onclick="check(event)" alt="Apagar">'
let tasks = '';
let countNumber = 1;
let count = document.querySelector('.count');



//Adiciona tarefa
const btnAdd = document.querySelector('.add-task');

btnAdd.addEventListener('click', function (e) {
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

  contentTask.innerHTML += task;

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

function check(event) {
  const card = event.target.closest('.card');// Obtém o elemento .card pai do elemento que acionou o evento

  if (card) {
    const checkImg = card.querySelector('.btnCheckImg');
    const description = card.querySelector('.description');

    function updateCount() {
      const countNeed = document.querySelector('.count-need-to-completed');
      if (countNeed) {
        countNeed.innerHTML = parseInt(countNeed.innerHTML) - 1;
      }
    }
    updateCount();

    if (checkImg) {
      checkImg.remove();

      const imgCheckX = '<img src="./images/x.png" class="btnCheckImgX" onclick="deleteTask(event)" alt="Apagar">';
      card.querySelector('.title-task').innerHTML += imgCheckX;

      //Adiciona um manipulador de eventos para a imagem de "X" para excluir a tarefa
      const imgCheckXnone = card.querySelector('.btnCheckImgX');
      imgCheckXnone.addEventListener('click', function () {
        deleteTask(event);
      });
    }

    const completedTasksSection = document.querySelector('.cards-completed');
    completedTasksSection.appendChild(card);

    card.classList.add('completed');
    description.classList.add('desc-completed');
  }
}

//Função para excluir uma tarefa
function deleteTask(event) {
  const card = event.target.closest('.card');
  card.remove();
}

//Modal
var modal = document.getElementById('modal');
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}