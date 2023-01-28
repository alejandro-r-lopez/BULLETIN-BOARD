import { checkAuth, createPost } from '../fetch-utils.js';

const homeButton = document.querySelector('.home-button');
const createForm = document.querySelector('.create-form');

checkAuth();

homeButton.addEventListener('click', () => {
    window.location = '/';
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postInfo = new FormData(createForm);

    const title = postInfo.get('title');
    const message = postInfo.get('message');
    const author = postInfo.get('author');

    await createPost(title, message, author);

    window.location = '../';
});
