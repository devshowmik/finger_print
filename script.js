let holdTimeout;
let progressBar = document.getElementById('progressBar');
let fingerprintArea = document.getElementById('fingerprintArea');

document.getElementById('fingerprintArea').addEventListener('mousedown', function() {
    fingerprintArea.classList.add('active');
    // Start the progress bar animation
    progressBar.style.width = '100%';

    // Set a timeout to redirect after 2 seconds
    holdTimeout = setTimeout(function() {
        window.location.href = 'redirect.html'; // Replace with your desired redirect page
    }, 2000);
});

document.getElementById('fingerprintArea').addEventListener('mouseup', function() {
    // Clear the timeout if the user releases the click before 2 seconds
    clearTimeout(holdTimeout);

    // Reset the progress bar
    progressBar.style.width = '0';
    fingerprintArea.classList.remove('active');
});

document.getElementById('fingerprintArea').addEventListener('mouseleave', function() {
    // Clear the timeout if the user moves the cursor away
    clearTimeout(holdTimeout);

    // Reset the progress bar
    progressBar.style.width = '0';
    fingerprintArea.classList.remove('active');
});
