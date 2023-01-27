import { signIn, signUp, redirectIfLoggedIn } from '../fetch-utils.js';

const homeButton = document.querySelector('.home-button');
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

homeButton.addEventListener('click', () => {
    window.location = '/';
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signUpInfo = new FormData(signUpForm);

    await signUp(signUpInfo.get('email'), signUpInfo.get('password'));

    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signInInfo = new FormData(signInForm);

    const user = await signIn(signInInfo.get('email'), signInInfo.get('password'));

    if (user) {
        redirectIfLoggedIn();
    }
});
