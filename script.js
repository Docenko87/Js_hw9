// --------- Задание 1 --------- //
// Создать html-страницу для ввода имени пользователя. 
// Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.
// function filterNumbers(input) {
//   let filteredText = input.value.replace(/\d/g, ''); // Удаляем все цифры из текста
//   input.value = filteredText; // Устанавливаем очищенный текст обратно в поле ввода
// }

// --------- Задание 2 --------- //
// Создать html-страницу с кнопкой Открыть и модальным 
// окном. На модальном окне должен быть текст и кнопка Закрыть. 
// Изначально модальное окно не отображается. При клике на 
// кнопку Открыть появляется модальное окно, на кнопку – 
// исчезает. 
// function openModal() {
//   var modal = document.getElementById('myModal');
//   modal.style.display = 'block';
// }

// // Функция для закрытия модального окна
// function closeModal() {
//   var modal = document.getElementById('myModal');
//   modal.style.display = 'none';
// }

// --------- Задание 3 --------- //
// Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100 
// пикселей. 
// Сделать так, чтобы при клике мышкой по полю, мяч плавно 
// перемещался на место клика. Учтите: необходимо, чтобы центр 
// мяча останавливался именно там,где был совершен клик мышкой. 
// Также предусмотрите, чтобы мяч не выходил за границы поля.
// var ball = document.getElementById('ball');
//         var field = document.getElementById('field');

        // Обработчик клика на поле
        // field.addEventListener('click', function(event) {
            // Получаем координаты клика
            // var x = event.clientX;
            // var y = event.clientY;

            // Вычисляем новые координаты для центра мяча
            // var ballX = x - field.getBoundingClientRect().left - ball.offsetWidth / 2;
            // var ballY = y - field.getBoundingClientRect().top - ball.offsetHeight / 2;

            // Проверяем, чтобы мяч не выходил за границы поля
            // if (ballX < 0) {
            //     ballX = 0;
            // } else if (ballX + ball.offsetWidth > field.offsetWidth) {
            //     ballX = field.offsetWidth - ball.offsetWidth;
            // }

            // if (ballY < 0) {
            //     ballY = 0;
            // } else if (ballY + ball.offsetHeight > field.offsetHeight) {
            //     ballY = field.offsetHeight - ball.offsetHeight;
            // }

            // Устанавливаем новые координаты для мяча с анимацией
        //     ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
        // });
// --------- Задание 4 --------- //
// Создать html-страницу со светофором и кнопкой, которая 
// переключает светофор на следующий цвет.
        // Функция для переключения цветов
        var colors = ['red', 'yellow', 'green'];
        var currentColor = 0;
        function changeLight() {
            // Выключаем текущий цвет
            document.querySelector('.' + colors[currentColor]).style.backgroundColor = '';
            // Переключаемся на следующий цвет
            currentColor = (currentColor + 1) % colors.length;
            // Включаем новый цвет
            document.querySelector('.' + colors[currentColor]).style.backgroundColor = colors[currentColor];
        }
