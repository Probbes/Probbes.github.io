// Get all buttons with class 'showMoreBtn'
const showMoreBtns = document.querySelectorAll('.showMoreBtn');

// Loop through each button and add a click event listener
showMoreBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Get the target ID from the button's data attribute
        const targetId = btn.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Toggle the visibility of the target element
        if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
            btn.textContent = 'Show Less';
        } else {
            targetElement.classList.add('hidden');
            btn.textContent = 'Show More';
        }
    });
});