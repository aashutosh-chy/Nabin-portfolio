// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const filterButtons = document.getElementById('filterButtons');
const projectsGrid = document.getElementById('projectsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxStory = document.getElementById('lightboxStory');
const lightboxImage = document.getElementById('lightboxImage');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const currentYear = document.getElementById('currentYear');
const quoteSlides = document.querySelectorAll('.quote-slide');
const sliderDots = document.querySelectorAll('.slider-dot');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

// ===== Projects Data =====
const projects = [
    {
        id: 1,
        title: "Silent Echoes",
        category: "monologue",
        description: "A powerful solo performance exploring grief and memory through minimal dialogue and maximum expression.",
        year: "2023"
    },
    {
        id: 2,
        title: "Urban Dreams",
        category: "film",
        description: "Modern adaptation of classical themes in a city landscape. A short film about urban isolation.",
        year: "2023"
    },
    {
        id: 3,
        title: "The Last Light",
        category: "theatre",
        description: "Stage play about hope in the darkest times. Performed at National Theatre Festival.",
        year: "2022"
    },
    {
        id: 4,
        title: "Whispers of Wind",
        category: "movement",
        description: "Physical theatre piece combining contemporary dance with dramatic storytelling.",
        year: "2022"
    },
    {
        id: 5,
        title: "Broken Mirrors",
        category: "monologue",
        description: "An intense exploration of identity and self-perception through fragmented memories.",
        year: "2021"
    },
    {
        id: 6,
        title: "Echo Chamber",
        category: "film",
        description: "Experimental short film about digital connectivity and human disconnect.",
        year: "2021"
    }
];

// ===== Gallery Data =====
const galleryItems = [
    {
        id: 1,
        title: "The Awakening",
        category: "Backstage",
        story: "Behind the curtains, moments before becoming someone else. The quiet anticipation, the deep breath before the plunge into character."
    },
    {
        id: 2,
        title: "Urban Solitude",
        category: "Street",
        story: "Finding characters in the city's forgotten corners. Every alley, every shadow holds a story waiting to be told."
    },
    {
        id: 3,
        title: "Echoes of Tradition",
        category: "Cultural",
        story: "Connecting classical roots with contemporary expression. The dance of heritage and innovation."
    },
    {
        id: 4,
        title: "Silent Dialogue",
        category: "Portrait",
        story: "Stories told through eyes and hands alone. When words fail, the body speaks volumes."
    },
    {
        id: 5,
        title: "Dance of Shadows",
        category: "Movement",
        story: "Exploring light and darkness in physical expression. The play of contrast in motion and emotion."
    },
    {
        id: 6,
        title: "Monologue in Rain",
        category: "Dramatic",
        story: "Raw emotion meeting nature's elements. When tears blend with raindrops, truth emerges."
    }
];

// ===== Quote Slider =====
let currentSlide = 0;

function showSlide(n) {
    // Hide all slides
    quoteSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    sliderDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Calculate new slide index
    currentSlide = (n + quoteSlides.length) % quoteSlides.length;
    
    // Show current slide
    quoteSlides[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// ===== Functions =====
function initProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-thumbnail">
                <i class="fas fa-play-circle"></i>
                <div class="project-play">
                    <i class="fas fa-play"></i>
                </div>
                <span class="project-year">${project.year}</span>
            </div>
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <a href="#" class="project-link">
                    Watch Performance <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function initGallery() {
    galleryGrid.innerHTML = '';
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <i class="fas fa-image"></i>
            </div>
            <div class="gallery-overlay">
                <span class="gallery-category">${item.category}</span>
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-story">${item.story}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(item));
        galleryGrid.appendChild(galleryItem);
    });
}

function openLightbox(item) {
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.category;
    lightboxStory.textContent = item.story;
    
    lightboxImage.innerHTML = `
        <i class="fas fa-image"></i>
    `;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    formMessage.textContent = 'Thank you for your message! I will respond soon.';
    formMessage.className = 'form-message success';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== Event Listeners =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Add fade-in effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('fade-in');
        }
    });
});

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Filter buttons
if (filterButtons) {
    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Filter projects
            const filter = e.target.getAttribute('data-filter');
            filterProjects(filter);
        }
    });
}

// Lightbox close
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox when clicking outside
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Quote slider controls
if (sliderPrev && sliderNext) {
    sliderPrev.addEventListener('click', prevSlide);
    sliderNext.addEventListener('click', nextSlide);
}

// Quote slider dots
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-advance quote slider
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const quoteSlider = document.querySelector('.quote-slider');
if (quoteSlider) {
    quoteSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    quoteSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize projects and gallery
    initProjects();
    initGallery();
    
    // Set current year in footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Show first quote slide
    showSlide(0);
    
    // Add fade-in class to hero section
    document.querySelector('.hero-section').classList.add('fade-in');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-progress').forEach(progress => {
        observer.observe(progress);
        
        // Animate progress bars when they become visible
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = progress.style.width;
                    progress.style.width = '0%';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 300);
                    observer2.unobserve(progress);
                }
            });
        }, { threshold: 0.5 });
        
        observer2.observe(progress);
    });
});