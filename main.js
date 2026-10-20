const url = 'https://i92532wp.beget.tech/hello.php'; 

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Сеть ответила с ошибкой: ' + response.status);
        }
        return response.text(); // Читаем ответ как текст
    })
    .then(text => {
        console.log('Текст из PHP файла:', text); 
        // Теперь в переменной text лежит твой "Hello World" (или что там вывел PHP)
        // Можешь вставить его на страницу, например:
        // document.getElementById('output').innerText = text;
    })
    .catch(error => {
        console.error('Не удалось забрать текст. Ошибка:', error);
    });