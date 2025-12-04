$(document).ready(function() {
    // Load header component
    $('#include-header').load('components/header.html', function(response, status, xhr) {
        if (status === 'error') {
            console.log('Error loading header: ' + xhr.status + ' ' + xhr.statusText);
        }
    });

    // Load footer component
    $('#include-footer').load('components/footer.html', function(response, status, xhr) {
        if (status === 'error') {
            console.log('Error loading footer: ' + xhr.status + ' ' + xhr.statusText);
        }
    });
});

