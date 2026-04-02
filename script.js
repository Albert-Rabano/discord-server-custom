// Page Navigation
const totalPages = 4;

function navigateTo(url) {
    window.location.href = url;
}

function goToNext() {
    const currentPage = window.currentPageNum || 1;
    if (currentPage < totalPages) {
        const pages = ['index.html', 'about.html', 'team.html', 'connect.html'];
        navigateTo(pages[currentPage]);
    }
}

function goToPrevious() {
    const currentPage = window.currentPageNum || 1;
    if (currentPage > 1) {
        const pages = ['index.html', 'about.html', 'team.html', 'connect.html'];
        navigateTo(pages[currentPage - 2]);
    }
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function toggleFormEmbed() {
    const formEmbed = document.getElementById('formEmbed');
    const toggleText = document.getElementById('toggleText');
    
    if (formEmbed && toggleText) {
        if (formEmbed.style.display === 'none') {
            formEmbed.style.display = 'block';
            toggleText.textContent = 'Hide Form';
            formEmbed.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            formEmbed.style.display = 'none';
            toggleText.textContent = 'Show Form';
        }
    }
}

function initializePage() {
    const currentPage = window.currentPageNum || 1;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Disable buttons based on current page
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
    });
}

// Initialize on page load
window.addEventListener('load', initializePage);
