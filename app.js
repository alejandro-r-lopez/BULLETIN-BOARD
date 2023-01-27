/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getPosts, getUser, redirectIfLoggedIn, signOut } from './fetch-utils.js';
import { renderPost } from './render.utils.js';

const postsSection = document.querySelector('.posts-section');
const signInButton = document.querySelector('.sign-in-button');
const createButton = document.querySelector('.create-button');

let postsData = [];

window.addEventListener('load', async () => {
    const user = await getUser();
    const gotPosts = await getPosts();

    postsData = gotPosts;

    displayPosts();

    if (user) {
        signInButton.textContent = 'SIGN OUT';
    }
});

function displayPosts() {
    for (let post of postsData) {
        const createdPost = renderPost(post);
        postsSection.append(createdPost);
    }
}

signInButton.addEventListener('click', () => {
    if (getUser()) signOut();
    window.location = '/auth';
});

createButton.addEventListener('click', () => {
    window.location = '/create';
});
