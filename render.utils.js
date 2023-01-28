export function renderPost(post) {
    const postLink = document.createElement('a');
    const postBox = document.createElement('div');
    const postImage = document.createElement('img');
    const postTitle = document.createElement('p');
    const postMessage = document.createElement('p');
    const postAuthor = document.createElement('p');

    postBox.classList.add('postbox-style');
    postBox.classList.add('postbox-style');
    postImage.src = 'assets/folder.png';
    postTitle.textContent = post.title;

    postLink.href = '/';
    postBox.append(postImage, postTitle);

    postLink.append(postBox);

    return postLink;
}

// postMessage.textContent = post.message;
// postAuthor.textContent = `---${post.author}`;
