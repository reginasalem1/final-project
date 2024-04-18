document.addEventListener("DOMContentLoaded", function() {
    const cityLinks = document.querySelectorAll('.city-link');

    cityLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const destination = this.getAttribute('href');
            const targetPage = document.querySelector(destination);

            // Get the position of the clicked link relative to the viewport
            const rect = this.getBoundingClientRect();

            // Calculate the center point of the clicked link
            const offsetX = rect.left + (rect.width / 2);
            const offsetY = rect.top + (rect.height / 2);

            // Calculate the scale factor for the zoom-in effect
            const scaleX = window.innerWidth / rect.width;
            const scaleY = window.innerHeight / rect.height;
            const scale = Math.max(scaleX, scaleY);

            // Apply the zoom-in effect using CSS transform
            document.querySelector('.page').style.transformOrigin = `${offsetX}px ${offsetY}px`;
            document.querySelector('.page').style.transform = `scale(${scale})`;

            // Wait for a short delay to allow the zoom-in effect to be visible
            setTimeout(function() {
                // Redirect to the destination page
                window.location.href = destination;
            }, 500); // Adjust the delay time as needed
        });
    });
});