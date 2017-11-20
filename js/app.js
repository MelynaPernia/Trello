window.addEventListener('load', function(event) {
  var container = event.target.getElementById('container');
  var addList = event.target.getElementById('add-container');
  // Funcion para agregar Lista
  var addListContainer = function() {
    addList.remove();
    var addInput = document.querySelector('input');
    var form = document.createElement('form');
    var inputTitle = document.createElement('input');
    var botton = document.createElement('button');
    var container = document.getElementById('container');

    form.appendChild(inputTitle);
    form.appendChild(botton);

    inputTitle.id = 'text-input';
    botton.textContent = 'Guardar';
    botton.name = 'btn-save';

    container.appendChild(form);
    var amoutIncome = 0;
    //Función para guardar las tareas con el boton guardar
    botton.addEventListener('click', function(event) {
      event.preventDefault();
      var word = document.createElement('p');

      if (amoutIncome === 0) {
        var textWord = document.getElementById('text-input').value;
        word.textContent = textWord;
        form.insertBefore(word, event.target);
        var addWord = document.createElement('p');
        addWord.textContent = 'Añadir Texto';
        addWord.id = 'add-list';
        form.insertBefore(addWord, event.target);
        inputTitle.remove();
        botton.remove();

        var addListWord = document.getElementById('add-list');
        addListWord.addEventListener('click', addListContainer);

      } else {
        word.textContent = textWord;
        form.insertBefore(word, event.target);
      }
      amoutIncome++;

    });
  }
  addList.addEventListener('click', addListContainer);

});
