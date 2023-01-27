export function renderPost(post) {
    const postBox = document.createElement('div');
    const postTitle = document.createElement('h2');
    const postMessage = document.createElement('p');
    const postAuthor = document.createElement('p');

    postTitle.textContent = post.title;
    postMessage.textContent = post.message;
    postAuthor.textContent = post.author;

    postBox.append(postTitle, postMessage, postAuthor);

    return postBox;
}
