document.addEventListener('DOMContentLoaded', function() {
    function showRoute(route) {
        const routes = ['login', 'purchase', 'profile', 'chat'];
        routes.forEach(r => {
            const element = document.getElementById(r);
            if (element) {
                element.style.display = (r === route) ? 'block' : 'none';
            }
        });
    }

    function handleHashChange() {
        const route = window.location.hash.substring(1);
        showRoute(route);
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initial route
    handleHashChange();
});
