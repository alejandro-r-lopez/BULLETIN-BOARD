import { signIn, signUp } from '../fetch-utils.js';

const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signUpInfo = new FormData(signUpForm);

    await signUp(signUpInfo.get('email'), signUpInfo.get('password'));

    window.location.href = '../';
});
