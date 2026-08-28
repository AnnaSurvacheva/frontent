document.addEventListener("DOMContentLoaded", function () {

    var container = document.querySelector('.popup-container');
    var popupButtons = document.querySelectorAll('.open-popup');
    var closeButton = document.querySelector('.popup__close');
    var form = document.getElementById('popup-form');

    for (let i = 0; i < popupButtons.length; i++) {
        popupButtons[i].addEventListener('click', function () {
            container.style.display = 'flex';
        });
    }

    container.addEventListener('click', function (event) {
        if (event.target == container) {
            container.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function () {
        container.style.display = 'none';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        container.style.display = 'none';
        form.reset();
    });

});
