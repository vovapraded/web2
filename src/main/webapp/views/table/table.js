export function  initTable(){
    window.addEventListener('load', displaySessionData);

}// Функция для отображения данных из sessionStorage (если нужно)
export function displaySessionData() {
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Очищаем таблицу перед обновлением

    // Получаем данные из sessionStorage
    const sessionData = JSON.parse(sessionStorage.getItem('formData')) || [];

    // Проходим по каждому элементу и создаем строки таблицы
    sessionData.forEach((entry) => {
        const newRow = tableBody.insertRow();

        const xCell = newRow.insertCell(0);
        const yCell = newRow.insertCell(1);
        const rCell = newRow.insertCell(2);
        const resultCell = newRow.insertCell(3);

        xCell.textContent = entry.x;
        yCell.textContent = entry.y;
        rCell.textContent = entry.R;
        resultCell.textContent = entry.result;
    });
}