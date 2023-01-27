export function renderPost(post) {
    const postBox = document.createElement('div');
    const postTitle = document.createElement('p');
    const postMessage = document.createElement('p');
    const postAuthor = document.createElement('p');

    postBox.classList.add('postbox-style');

    postTitle.textContent = `${post.title}:`;
    postMessage.textContent = post.message;
    postAuthor.textContent = `---${post.author}`;

    postBox.append(postTitle, postMessage, postAuthor);

    return postBox;
}
