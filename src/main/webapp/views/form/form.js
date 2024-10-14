import {initTable, displaySessionData} from "../table/table.js";
import {forwardToCheckPage} from "../forward/forward.js";

function setOnButtonAction() {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Собираем данные формы
        const formData = new FormData(this); // this указывает на форму
        const queryString = new URLSearchParams(formData).toString(); // Преобразуем данные формы в строку запроса
        forwardToCheckPage(queryString);
        // Здесь можно также добавить обработку данных, если нужно что-то делать до перехода
    });
}

// Вызовем displaySessionData при загрузке страницы, чтобы восстановить данные

// Объявляем функцию и экспортируем её
export function initForm() {
    setOnButtonAction();
    setValidation();
    initTable();
}

   function setValidation() {
   setValidationX();
    setValidationY();
}
function setValidationX(){
    document.getElementById('xInput').addEventListener('input', function (event) {
        const input = event.target;
        const value = input.value;

        // Удаляем все символы, кроме цифр, минуса и точки
        const sanitizedValue = value.replace(/[^-?\d.]/g, '');

        // Разрешаем только один минус в начале и одну точку
        if ((sanitizedValue.match(/-/g) || []).length > 1 || sanitizedValue.indexOf('-') > 0) {
            input.value = ''; // Если есть лишний минус, очищаем поле
            return;
        }
        if ((sanitizedValue.match(/\./g) || []).length > 1) {
            input.value = ''; // Если есть лишняя точка, очищаем поле
            return;
        }
        const numberValue = parseFloat(sanitizedValue);

        // Проверяем, является ли значение числом, и в диапазоне (-3, 3)
        if (!isNaN(numberValue) && numberValue > -3 && numberValue < 3) {
            document.getElementById('error-message').innerText = ''; // Убираем сообщение об ошибке
            input.value = sanitizedValue; // Оставляем только валидные символы
        } else if (sanitizedValue === '' || sanitizedValue === '-') {
            input.value = sanitizedValue; // Разрешаем пустое или минус как промежуточное состояние
        } else {
            document.getElementById('error-message').innerText = 'Введите число от -3 до 3';
            input.value = ''; // Очищаем поле, если не соответствует диапазону
        }
    });
}
function setValidationY(){
    document.getElementById('yInput').addEventListener('input', function (event) {
        const input = event.target;

        console.log(input.getAttribute('value')); // Это нужно, если вы хотите обновить значение атрибута value в HTML

        if ((!input.checkValidity() && input.value !== '' && input.value !== '-')
        || (input.value.includes('.') || input.value.includes(','))) {
            // Здесь можно обрабатывать случай, когда поле не валидно
            document.getElementById('error-message').innerText = 'Введите допустимое значение!';
            input.setAttribute('text', ''); // Это нужно, если вы хотите обновить значение атрибута value в HTML
        }else {
            // Если значение валидно, убираем сообщение об ошибке
            document.getElementById('error-message').innerText = '';
        }
    })
}