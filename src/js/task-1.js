// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

import { STORAGE_KEY, USER_DATA } from "./constance";
import { refs } from "./refs";

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними,викликати аlert і
// повідомляти про помилку.

function onLoginFormSubmit(e){
    e.preventDefault();
const {email, password, button} = e.target;
if(email.value !== USER_DATA.email || password.value !== USER_DATA.password){
    alert('Wrong data');
    return;
}

if(button.textContent = "Logout"){
    button.textContent = 'Login';
    email.disabled = false;
    password.disabled = false;
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    return;
}
const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
}

localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

button.textContent = 'Logout';
email.disabled = true;
password.disabled = true;
}

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

document.addEventListener('DOMContentLoaded', initPage);

function initPage(){
    try {
       const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
       if(!storageData){
        return;
       }
       email.value = storageData.email;
       password.value = storageData.password;
button.textContent = 'Logout';
email.disabled = true;
password.disabled = true;
    } catch (error) {
        console.log(error);
        
    }
}