export function renderPost(post) {
    const postLink = document.createElement('a');
    const postBox = document.createElement('div');
    const postTitle = document.createElement('p');
    const postMessage = document.createElement('p');
    const postAuthor = document.createElement('p');

    postBox.classList.add('postbox-style');

    postTitle.textContent = `${post.title}:`;
    postMessage.textContent = post.message;
    postAuthor.textContent = `---${post.author}`;
    postLink.href = '/';
    postBox.append(postTitle, postMessage, postAuthor);

    postLink.append(postBox);

    return postLink;
}
