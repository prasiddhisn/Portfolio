// Add fade-in animation on page load
window.addEventListener('load', function() {
    document.querySelectorAll('.intro, .profile-pic').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 1.5s ease-in-out, transform 1s ease-out';
        }, 300);
    });
});

// Add hover effect to navigation links
document.querySelectorAll('.nav-item').forEach(link => {
    const number = link.querySelector('.number');
    link.addEventListener('mouseover', () => {
        link.style.color = number.style.color;
    });
    link.addEventListener('mouseout', () => {
        link.style.color = document.body.classList.contains('dark') ? '#E0D9C4' : '#E0D9C43';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const toggleIcon = document.getElementById('toggle-icon'); // Get the image element

    const instagramIcon = document.getElementById('instagram-icon');
    const githubIcon = document.getElementById('github-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');

    // Set the initial icon and social media icons based on the mode
    if (document.body.classList.contains('dark')) {
        toggleIcon.src = 'Icons/icons8-sun-50.png'; // Sun icon for dark mode
        toggleIcon.alt = 'Toggle Light Mode';
        
        // Set dark mode icons for social media
        instagramIcon.src = 'Icons/icons8-instagram-50(1).png';
        githubIcon.src = 'Icons/icons8-github-50.png';
        linkedinIcon.src = 'Icons/icons8-linkedin-50.png';
    } else {
        toggleIcon.src = 'Icons/icons8-moon-and-stars-24.png'; // Moon icon for light mode
        toggleIcon.alt = 'Toggle Dark Mode';
        
        // Set light mode icons for social media
        instagramIcon.src = 'Icons/icons8-instagram-50(2).png'; // Replace with light version
        githubIcon.src = 'Icons/icons8-github-50(1).png'; // Replace with light version
        linkedinIcon.src = 'Icons/icons8-linkedin-50(1).png'; // Replace with light version
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        
        // Update the icon for the toggle button
        if (document.body.classList.contains('dark')) {
            toggleIcon.src = 'Icons/icons8-sun-50.png'; // Sun icon for dark mode
            toggleIcon.alt = 'Toggle Light Mode';
            
            // Change to dark mode social media icons
            instagramIcon.src = 'Icons/icons8-instagram-50(1).png';
            githubIcon.src = 'Icons/icons8-github-50.png';
            linkedinIcon.src = 'Icons/icons8-linkedin-50.png';
        } else {
            toggleIcon.src = 'Icons/icons8-moon-and-stars-24.png'; // Moon icon for light mode
            toggleIcon.alt = 'Toggle Dark Mode';
            
            // Change to light mode social media icons
            instagramIcon.src = 'Icons/icons8-instagram-50(2).png'; // Replace with light version
            githubIcon.src = 'Icons/icons8-github-50(1).png'; // Replace with light version
            linkedinIcon.src = 'Icons/icons8-linkedin-50(1).png'; // Replace with light version
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const revealWrapper = document.getElementById('reveal-wrapper');
    const aboutMeSection = document.getElementById('about-me');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const aboutMeOffset = aboutMeSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        // Check if the user has scrolled to reveal the About Me section
        if (scrollTop + windowHeight > aboutMeOffset) {
            revealWrapper.classList.add('active');
            scrollIndicator.classList.remove('hidden');
        } else {
            revealWrapper.classList.remove('active');
            scrollIndicator.classList.add('hidden');
        }
    });
    
    // Scroll to the About Me section when clicking the scroll indicator
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: aboutMeSection.offsetTop - 50, // Optional: Adjust for any offset
            behavior: 'smooth'
        });
    });
});

// Add this to your JavaScript code
const arrow = document.querySelector(".arrow");
const aboutMeContainer = document.querySelector(".about-me-container");
const mainPage = document.querySelector("main"); /* assuming your main page has a <main> element */

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const aboutMeOffset = aboutMeContainer.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight > aboutMeOffset) {
    const translateAmount = scrollTop + windowHeight - aboutMeOffset;
    aboutMeContainer.style.transform = `translateY(-${translateAmount}px)`;
    arrow.style.transform = `translateY(${translateAmount}px) rotate(180deg) scale(1.2)`;
  } else {
    aboutMeContainer.style.transform = `translateY(100vh)`;
    arrow.style.transform = `translateY(0) rotate(0deg) scale(1)`;
  }
});

