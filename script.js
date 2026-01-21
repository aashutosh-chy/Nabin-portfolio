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

// ===== Projects Data with YouTube Embed Codes =====
const projects = [
    {
        id: 1,
        title: "Silent Echoes",
        category: "monologue",
        description: "A powerful solo performance exploring grief and memory through minimal dialogue and maximum expression.",
        year: "2023",
        youtubeId: "VjJqLqI3vWA" // Replace with actual YouTube ID
    },
    {
        id: 2,
        title: "Urban Dreams",
        category: "film",
        description: "Modern adaptation of classical themes in a city landscape. A short film about urban isolation.",
        year: "2023",
        youtubeId: "75N732chSDM" // Replace with actual YouTube ID
    },
    {
        id: 3,
        title: "The Last Light",
        category: "theatre",
        description: "Stage play about hope in the darkest times. Performed at National Theatre Festival.",
        year: "2022",
        youtubeId: "7yPgi80zY2s" // Replace with actual YouTube ID
    },
    {
        id: 4,
        title: "Whispers of Wind",
        category: "movement",
        description: "Physical theatre piece combining contemporary dance with dramatic storytelling.",
        year: "2022",
        youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube ID
    },
    {
        id: 5,
        title: "Broken Mirrors",
        category: "monologue",
        description: "An intense exploration of identity and self-perception through fragmented memories.",
        year: "2021",
        youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube ID
    },
    {
        id: 6,
        title: "Echo Chamber",
        category: "film",
        description: "Experimental short film about digital connectivity and human disconnect.",
        year: "2021",
        youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube ID
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

// ===== Video Player Management =====
let activeVideoPlayer = null;
let videoPlayers = {};

function initializeVideoPlayers() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const videoId = container.getAttribute('data-video-id');
        const maximizeBtn = container.querySelector('.maximize-btn');
        const minimizeBtn = container.querySelector('.minimize-btn');
        const playPlaceholder = container.querySelector('.video-placeholder');
        const videoIframe = container.querySelector('iframe');
        
        // Store reference to iframe
        if (videoIframe) {
            videoPlayers[videoId] = videoIframe;
        }
        
        if (playPlaceholder) {
            playPlaceholder.addEventListener('click', () => {
                loadAndPlayVideo(container, videoId);
            });
        }
        
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', () => {
                maximizeVideo(container);
            });
        }
        
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => {
                minimizeVideo(container);
            });
        }
    });
}

function loadAndPlayVideo(container, videoId) {
    const placeholder = container.querySelector('.video-placeholder');
    const videoWrapper = container.querySelector('.video-wrapper');
    
    if (placeholder && videoWrapper) {
        // Create YouTube iframe with proper embed URL
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1`;
        iframe.title = "YouTube video player";
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowfullscreen = true;
        iframe.loading = "lazy";
        
        // Hide placeholder and show video
        placeholder.style.display = 'none';
        videoWrapper.innerHTML = '';
        videoWrapper.appendChild(iframe);
        
        // Store reference
        videoPlayers[videoId] = iframe;
    }
}

function maximizeVideo(videoContainer) {
    if (activeVideoPlayer) {
        minimizeVideo(activeVideoPlayer);
    }
    
    videoContainer.classList.add('maximized');
    activeVideoPlayer = videoContainer;
    
    // Add overlay to prevent interaction with other elements
    const overlay = document.createElement('div');
    overlay.className = 'video-maximized-overlay';
    overlay.id = 'videoOverlay';
    document.body.appendChild(overlay);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
    
    // Update z-index to bring to front
    videoContainer.style.zIndex = '2003';
}

function minimizeVideo(videoContainer) {
    videoContainer.classList.remove('maximized');
    activeVideoPlayer = null;
    
    // Remove overlay
    const overlay = document.getElementById('videoOverlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Enable body scroll
    document.body.style.overflow = 'auto';
    
    // Reset z-index
    videoContainer.style.zIndex = '';
}

// Close maximized video when clicking outside
document.addEventListener('click', (e) => {
    if (activeVideoPlayer && !activeVideoPlayer.contains(e.target) && !e.target.closest('.video-controls')) {
        minimizeVideo(activeVideoPlayer);
    }
});

// ===== Quote Slider =====
let currentSlide = 0;
let slideInterval;

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

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
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
                <div class="video-container" data-video-id="${project.youtubeId}">
                    <div class="video-wrapper">
                        <!-- Video will be loaded here when clicked -->
                    </div>
                    <div class="video-placeholder">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="placeholder-text">Click to play video</div>
                        <img src="https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg" 
                             alt="${project.title}" 
                             class="thumbnail-image"
                             loading="lazy">
                    </div>
                    <div class="video-controls">
                        <button class="maximize-btn" title="Maximize">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button class="minimize-btn" title="Minimize">
                            <i class="fas fa-compress"></i>
                        </button>
                    </div>
                </div>
                <span class="project-year">${project.year}</span>
            </div>
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <a href="https://www.youtube.com/watch?v=${project.youtubeId}" target="_blank" class="project-link">
                    Watch on YouTube <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Initialize video players after creating them
    setTimeout(initializeVideoPlayers, 100);
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
    formMessage.style.display = 'block';
    
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
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            closeLightbox();
        }
        if (activeVideoPlayer) {
            minimizeVideo(activeVideoPlayer);
        }
    }
});

// Quote slider controls
if (sliderPrev && sliderNext) {
    sliderPrev.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    sliderNext.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
}

// Quote slider dots
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Pause auto-advance on hover
const quoteSlider = document.querySelector('.quote-slider');
if (quoteSlider) {
    quoteSlider.addEventListener('mouseenter', stopAutoSlide);
    quoteSlider.addEventListener('mouseleave', startAutoSlide);
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
    
    // Start quote slider
    showSlide(0);
    startAutoSlide();
    
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
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
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
    document.querySelectorAll('.project-card, .gallery-item, .achievement-card, .principle-card, .timeline-content').forEach(el => {
        observer.observe(el);
    });
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate any layout-dependent elements
        const navbarHeight = navbar.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    }, 250);
});