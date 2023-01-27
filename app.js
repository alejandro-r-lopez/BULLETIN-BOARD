/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getPosts } from './fetch-utils.js';

const postsSection = document.querySelector('.posts-section');

let postsData = [];

window.addEventListener('load', async () => {
    const gotPosts = await getPosts();
    postsData = gotPosts;

    for (let post of postsData) {
        const createdPost = renderPost(post);
        postsSection.append(createdPost);
    }
});

function renderPost(post) {
    const postBox = document.createElement('div');
    const postTitle = document.createElement('h2');
    const postMessage = document.createElement('p');
    const postAuthor = document.createElement('p');

    postTitle.textContent = post.title;
    postBox.append(postTitle);
    return postBox;
}
