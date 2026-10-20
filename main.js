// Обязательно HTTPS, иначе GitHub (клиент) заблокирует запрос!
const url = 'https://i92532wp.beget.tech'; 

fetch(url, {
    method: 'GET',
    mode: 'cors' // Явно указываем режим CORS
})
.then(response => {
    if (!response.ok) {
        throw new Error('Ошибка сервера Beget: ' + response.status);
    }
    return response.text();
})
.then(text => {
    console.log('Данные с Beget получены:', text);
    // Делай с текстом что хочешь на странице гитхаба
})
.catch(error => {
    console.error('Связка сорвалась. Ошибка:', error);
});