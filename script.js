const section = document.querySelector('#title');

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin around the root
  threshold: 0.5 // Trigger when 50% of the section is visible
};

// Intersection Observer callback function
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class when section is in view
      observer.unobserve(entry.target); // Stop observing once the section is visible
    }
  });
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Start observing the section
observer.observe(section);

