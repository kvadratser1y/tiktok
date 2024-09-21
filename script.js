let timeSpent = 0;
const limit = 30 * 60 * 1000; // 30 минут в миллисекундах
let isBlocked = false;

window.onload = function() {
    const interval = setInterval(function() {
        if (!isBlocked) {
            timeSpent += 1000; // Увеличиваем на 1 секунду
            if (timeSpent >= limit) {
                clearInterval(interval);
                blockUser();
            }
        }
    }, 1000);

    setTimeout(function() {
        window.location.href = "https://www.tiktok.com";
    }, 2000); // 2000 миллисекунд = 2 секунды
};

function blockUser() {
    isBlocked = true;
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('lock-screen').style.display = 'block';
}

document.getElementById('submit-nickname').onclick = function() {
    const nickname = document.getElementById('nickname').value;
    // Здесь можно сохранить ник в локальном хранилище или на сервере
    alert(`Ник ${nickname} отправлен.`);
};

document.getElementById('admin-button').onclick = function() {
    const password = prompt("Введите пароль:");
    if (password === "HF94hG9gvikrI9") {
        alert("Доступ к администратору предоставлен!");
        // Здесь можно показать информацию о никах и кнопки разблокировки
    } else {
        alert("Неверный пароль!");
    }
};

