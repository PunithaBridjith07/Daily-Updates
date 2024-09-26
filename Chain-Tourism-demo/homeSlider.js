    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');
    let tours = document.querySelectorAll('.tour');
    let currentIndex = 0;
    
    function showTour(index) {
        // Hide all tours
        tours.forEach(tour => {
            tour.classList.remove('active', 'slide-left', 'slide-right');
        });
    
        // Set the current tour as active
        tours[index].classList.add('active');
    }
    
    // Handle next button click
    next.addEventListener('click', function() {
        // Slide out the current tour
        tours[currentIndex].classList.add('slide-left');
    
        // Update current index
        currentIndex = (currentIndex + 1) % tours.length;
    
        // Show the next tour
        showTour(currentIndex);
    
        // Add the slide-in animation to the new active tour
        tours[currentIndex].classList.remove('slide-left', 'slide-right');
        tours[currentIndex].classList.add('slide-right');
    });
    
    // Handle previous button click
    prev.addEventListener('click', function() {
        // Slide out the current tour
        tours[currentIndex].classList.add('slide-right');
    
        // Update current index
        currentIndex = (currentIndex - 1 + tours.length) % tours.length;
    
        // Show the previous tour
        showTour(currentIndex);
    
        // Add the slide-in animation to the new active tour
        tours[currentIndex].classList.remove('slide-left', 'slide-right');
        tours[currentIndex].classList.add('slide-left');
    });
    
    // Initial display
    showTour(currentIndex);
    