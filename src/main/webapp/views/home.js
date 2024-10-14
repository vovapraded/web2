import {drawFullPlot, clearPlot, addEventListeners, updatePlot} from './plot/plot.js';
import {initForm} from "./form/form.js";
import {displaySessionData} from "./table/table.js"
import {initInteraction} from "./interaction/interaction.js"


document.addEventListener('DOMContentLoaded', () => {
    initialize();
});
// Инициализация
function initialize() {
    addEventListeners(); // Добавляем слушатели событий
    updatePlot(); // Обновляем график при загрузке страницы
    initForm();
    initResetButton();
    initInteraction();
    initUpdatingOfTable()
}

function initResetButton() {
// Обработчик для кнопки "Reset Session Data"
    document.getElementById('resetSessionBtn').addEventListener('click', function () {
        // Очищаем sessionStorage
        sessionStorage.clear();
        updatePlot();
        displaySessionData();
        // Сообщаем пользователю, что данные сессии были сброшены
        alert("Session data has been reset!");
    });
}
function initUpdatingOfTable(){
    window.addEventListener('pageshow', function() {
        // Проверяем, есть ли сохраненное состояние при загрузке страницы
        console.log("aboba");
        displaySessionData();
    });
}
