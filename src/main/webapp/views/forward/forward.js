
export function forwardToCheckPage(queryString){
    const currentContent = document.innerHTML;


    // Переход на новую страницу (например, /controller)
    window.location.href = `controller?${queryString}`;  // Загружаем новую страницу
}
