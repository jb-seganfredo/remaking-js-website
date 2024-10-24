function showContent(contentId, buttonId) {

    const allContents = document.querySelectorAll('.content > div');
    allContents.forEach(content => content.style.display = 'none');

    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => button.classList.remove('active'));

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showContent('content-1', 'button-1');
});

document.getElementById('button-1').addEventListener('click', () => showContent('content-1', 'button-1'));
document.getElementById('button-2').addEventListener('click', () => showContent('content-2', 'button-2'));
document.getElementById('button-3').addEventListener('click', () => showContent('content-3', 'button-3'));