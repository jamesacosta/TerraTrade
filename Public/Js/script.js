document.querySelectorAll('.service').forEach(function(div) {

    div.addEventListener('mouseover', function()  {
            this.style.backgroundColor = '#8fbc8f'; 
            this.style.color = 'black';
        });
    div.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ffffff00'; 
            this.style.color = 'white';
        });
   });

document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});
