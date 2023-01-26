/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

import { getPosts } from './fetch-utils.js';

let postsData = [];

window.addEventListener('load', async () => {
    const gotPosts = await getPosts();
    postsData = gotPosts;
    console.log(postsData);
});
