import { checkAuth } from '../fetch-utils.js';

const homeButton = document.querySelector('.home-button');

checkAuth();

homeButton.addEventListener('click', () => {
    window.location = '/';
});
