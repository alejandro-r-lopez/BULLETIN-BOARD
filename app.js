/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getPosts } from './fetch-utils.js';
import { renderPost } from './render.utils.js';

const postsSection = document.querySelector('.posts-section');

let postsData = [];

window.addEventListener('load', async () => {
    const gotPosts = await getPosts();

    postsData = gotPosts;

    displayPosts();
});

function displayPosts() {
    for (let post of postsData) {
        const createdPost = renderPost(post);
        postsSection.append(createdPost);
    }
}
