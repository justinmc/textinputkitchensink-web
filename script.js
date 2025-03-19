document.addEventListener('DOMContentLoaded', function() {
    function showRoute(route) {
        const routes = ['home', 'login', 'purchase', 'profile', 'chat'];
        routes.forEach(r => {
            const element = document.getElementById(r);
            if (element) {
                element.style.display = (r === route) ? 'block' : 'none';
            }
        });
    }

    function handleHashChange() {
        let route = window.location.hash.substring(1);
        if (route == '') {
          route = 'home';
        }
        showRoute(route);
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initial route
    handleHashChange();

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            const email = emailInput.value;
            const password = passwordInput.value;

            // Email validation (basic check for @ symbol)
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            // Password validation (minimum 5 characters)
            if (password.length < 5) {
                alert('Password must be at least 5 characters long.');
                return;
            }

            // If validation passes, redirect to home
            window.location.hash = 'home';
        });
    }

    // Purchase form submission
    const purchaseForm = document.getElementById('purchaseForm');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // In a real application, you would perform validation here.
            // For this example, we assume the form is valid if all fields are filled.

            // Redirect to home
            window.location.hash = 'home';
        });
    }

    // Profile Creation form submission and character count
    const profileForm = document.getElementById('profileForm');
    const bioInput = document.getElementById('bio');
    const bioCount = document.getElementById('bioCount');

    if (profileForm && bioInput && bioCount) {
        bioInput.addEventListener('input', function() {
            const currentLength = bioInput.value.length;
            bioCount.textContent = `${currentLength}/50 characters`;
        });

        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const bio = bioInput.value;

            // Bio validation (minimum 50 characters)
            if (bio.length < 50) {
                alert('Bio must be at least 50 characters long.');
                return;
            }

            // Redirect to home
            window.location.hash = 'home';
        });
    }

    // Chat page message sending
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    if (sendButton && messageInput && messagesContainer) {
        sendButton.addEventListener('click', function() {
            const message = messageInput.value;
            if (message.trim() !== '') {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'sent');
                messageElement.textContent = message;
                messagesContainer.appendChild(messageElement);
                messageInput.value = '';
                messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
            }
        });
    }
});
