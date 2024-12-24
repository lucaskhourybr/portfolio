'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Alterna entre os temas
    document.body.classList.toggle('dark-theme');

    // Obtém a classe atual
    var className = document.body.className;

    if (className === "dark-theme") {
        console.log('Current class name: ' + className);
        this.textContent = "Preto"; 
    } else {
        console.log('Current class name: ' + className);
        this.textContent = "Claro";
    }
});
