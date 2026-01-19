// Active link state
const allNavLinks = document.querySelectorAll('#link a');
const currentPage = window.location.pathname;

allNavLinks.forEach(eachLink => {
    const href = eachLink.getAttribute('href');
    
    // Check if this link matches the current page
    const isActive = 
        (currentPage.includes('index.html') && href === 'index.html') ||
        (currentPage.includes('projects.html') && href === 'projects.html') ||
        (currentPage.includes('testimonials.html') && href === 'testimonials.html') ||
        (currentPage.endsWith('/') && href === '#my-services-section');
    
    if (isActive) {
        eachLink.classList.add('text-tertiary', 'font-bold');
        eachLink.classList.remove('text-primary-dark');
    } else {
        eachLink.classList.remove('text-tertiary', 'font-bold');
        eachLink.classList.add('text-primary-dark');
    }
});


    

    // Optional: Keep click handler for Services link (same page anchor)
    allNavLinks.forEach(eachLink => {
        eachLink.addEventListener('click', () => {
         if (eachLink.getAttribute('href').startsWith('#')) {
            allNavLinks.forEach(link => {
                link.classList.remove('text-tertiary', 'font-bold');
                link.classList.add('text-primary-dark');
            });
            eachLink.classList.add('text-tertiary', 'font-bold');
        }
    });
});
