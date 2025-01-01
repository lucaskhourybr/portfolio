function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showNext(currentModalId, nextModalId) {
    closeModal(currentModalId);
    openModal(nextModalId);
}
