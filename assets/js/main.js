document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    window.navigation = new Navigation();
    window.pageManager = new PageManager();

    // Add any global event listeners or initialization code here
    console.log('Personal website initialized successfully!');

    window.addEventListener('hashchange', () => {
        const pageId = window.location.hash.replace('#', '') || 'home';
        window.pageManager.showPage(pageId, false); // don't re-update hash
    });
});