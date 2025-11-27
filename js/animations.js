// Advanced Animations for Moers Website

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroAnimations();
    initializeScrollTriggerAnimations();
    //initializeMouseFollowEffects(); //
    initializePortfolioAnimations();
    initializeStatAnimations();
    initializeTextAnimations();
    initializeButtonAnimations();
    initializeBackgroundAnimations();
});

// Hero Section Animations
function initializeHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const websiteMockup = document.querySelector('.website-mockup');
    
    // Animate hero content with stagger effect
    if (heroTitle) {
        animateText(heroTitle, 100);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(20px)';
            heroSubtitle.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 100);
        }, 800);
    }
    
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.style.opacity = '0';
            heroButtons.style.transform = 'translateY(20px)';
            heroButtons.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 100);
        }, 1200);
    }
    
    // Animated website mockup
    if (websiteMockup) {
        websiteMockup.style.opacity = '0';
        websiteMockup.style.transform = 'translateX(50px) scale(0.9)';
        websiteMockup.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            websiteMockup.style.opacity = '1';
            websiteMockup.style.transform = 'translateX(0) scale(1)';
        }, 600);
        
        // Add floating animation
        setInterval(() => {
            websiteMockup.style.transform += ' translateY(-5px)';
            setTimeout(() => {
                websiteMockup.style.transform = websiteMockup.style.transform.replace(' translateY(-5px)', '');
            }, 2000);
        }, 4000);
    }
}

// Text Animation Functions
function animateText(element, delay = 50) {
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = '';
    
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(20px)';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.marginRight = '0.3em';
        wordSpan.style.transition = 'all 0.6s ease';
        wordSpan.textContent = word;
        
        element.appendChild(wordSpan);
        
        setTimeout(() => {
            wordSpan.style.opacity = '1';
            wordSpan.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

function typewriterEffect(element, speed = 50) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary-color)';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, speed);
}

// Scroll Trigger Animations
function initializeScrollTriggerAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Different animation types based on data attributes
                const animationType = element.dataset.animation;
                
                switch(animationType) {
                    case 'slide-up':
                        slideUpAnimation(element);
                        break;
                    case 'slide-left':
                        slideLeftAnimation(element);
                        break;
                    case 'slide-right':
                        slideRightAnimation(element);
                        break;
                    case 'fade-in':
                        fadeInAnimation(element);
                        break;
                    case 'scale-in':
                        scaleInAnimation(element);
                        break;
                    case 'rotate-in':
                        rotateInAnimation(element);
                        break;
                    default:
                        slideUpAnimation(element);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation data attributes
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Animation Functions
function slideUpAnimation(element) {
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}

function slideLeftAnimation(element) {
    element.style.transform = 'translateX(-30px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }, 100);
}

function slideRightAnimation(element) {
    element.style.transform = 'translateX(30px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }, 100);
}

function fadeInAnimation(element) {
    element.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
    }, 100);
}

function scaleInAnimation(element) {
    element.style.transform = 'scale(0.8)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }, 100);
}

function rotateInAnimation(element) {
    element.style.transform = 'rotate(-10deg) scale(0.8)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'rotate(0) scale(1)';
    }, 100);
}

// Portfolio Hover Animations
function initializePortfolioAnimations() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const image = item.querySelector('.portfolio-image img');
        const overlay = item.querySelector('.portfolio-overlay');
        
        item.addEventListener('mouseenter', () => {
            if (image) {
                image.style.transform = 'scale(1.1) rotate(2deg)';
                image.style.filter = 'brightness(0.8)';
            }
            
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'scale(1)';
                
                // Animate overlay content
                const overlayContent = overlay.children;
                Array.from(overlayContent).forEach((child, index) => {
                    child.style.transform = 'translateY(20px)';
                    child.style.opacity = '0';
                    child.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                        child.style.transform = 'translateY(0)';
                        child.style.opacity = '1';
                    }, index * 100 + 100);
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (image) {
                image.style.transform = 'scale(1) rotate(0deg)';
                image.style.filter = 'brightness(1)';
            }
            
            if (overlay) {
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(0.95)';
            }
        });
    });
}

// Statistics Animation
function initializeStatAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const suffix = element.textContent.replace(/\d/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);
        
        let current = 0;
        element.textContent = '0' + suffix;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
                
                // Add pulse effect when complete
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Mouse Follow Effects
function initializeMouseFollowEffects() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update CSS custom properties for mouse position
        document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
        document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
    });
    
    // Create floating particles that follow mouse
    createMouseFollowParticles();
}

function createMouseFollowParticles() {
    const particleCount = 5;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(particle);
        particles.push({
            element: particle,
            x: 0,
            y: 0,
            delay: i * 50
        });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateParticles() {
        particles.forEach((particle, index) => {
            const delay = index * 0.02;
            particle.x += (mouseX - particle.x) * (0.1 - delay);
            particle.y += (mouseY - particle.y) * (0.1 - delay);
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.opacity = 0.6 - (index * 0.1);
        });
        
        requestAnimationFrame(updateParticles);
    }
    
    updateParticles();
}

// Advanced Button Animations
function initializeButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add magnetic effect
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
        
        // Add click wave effect
        button.addEventListener('click', (e) => {
            const wave = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            wave.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: waveAnimation 0.6s ease-out;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(wave);
            
            setTimeout(() => {
                wave.remove();
            }, 600);
        });
    });
}

// Background Animations
function initializeBackgroundAnimations() {
    // Animated gradient backgrounds
    const gradientElements = document.querySelectorAll('.gradient-animation');
    
    gradientElements.forEach(element => {
        element.style.background = `
            linear-gradient(-45deg, #3B82F6, #2563EB, #1D4ED8, #60A5FA)
        `;
        element.style.backgroundSize = '400% 400%';
        element.style.animation = 'gradientShift 8s ease infinite';
    });
    
    // Floating geometric shapes
    createFloatingShapes();
    
    // Parallax background elements
    initializeParallaxBackground();
}

function createFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    shapesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(shapesContainer);
    
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['var(--primary-color)', 'var(--primary-light)', 'var(--secondary-color)'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 60 + 20;
        
        shape.className = `floating-shape ${shapeType}`;
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            opacity: 0.1;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatShape ${8 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        if (shapeType === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.background = 'transparent';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${color}`;
            shape.style.width = '0';
            shape.style.height = '0';
        }
        
        shapesContainer.appendChild(shape);
    }
}

function initializeParallaxBackground() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

// Advanced Text Effects
function initializeTextAnimations() {
    // Glitch effect for special text
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    glitchElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = `
            <span class="glitch-text" data-text="${text}">${text}</span>
        `;
        
        const glitchText = element.querySelector('.glitch-text');
        glitchText.style.cssText = `
            position: relative;
            display: inline-block;
        `;
        
        // Add pseudo-elements for glitch effect
        const style = document.createElement('style');
        style.textContent = `
            .glitch-text::before,
            .glitch-text::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.8;
                animation: glitch 2s infinite;
            }
            
            .glitch-text::before {
                color: #ff0000;
                animation-delay: 0.1s;
            }
            
            .glitch-text::after {
                color: #00ff00;
                animation-delay: 0.2s;
            }
            
            @keyframes glitch {
                0%, 90%, 100% {
                    transform: translate(0);
                }
                10% {
                    transform: translate(-2px, 2px);
                }
                20% {
                    transform: translate(2px, -2px);
                }
                30% {
                    transform: translate(-2px, -2px);
                }
                40% {
                    transform: translate(2px, 2px);
                }
                50% {
                    transform: translate(-2px, 2px);
                }
                60% {
                    transform: translate(2px, -2px);
                }
                70% {
                    transform: translate(-2px, -2px);
                }
                80% {
                    transform: translate(2px, 2px);
                }
            }
        `;
        document.head.appendChild(style);
    });
    
    // Morphing text effect
    initializeMorphingText();
}

function initializeMorphingText() {
    const morphingElements = document.querySelectorAll('.morphing-text');
    
    morphingElements.forEach(element => {
        const words = element.dataset.words.split(',');
        let currentWordIndex = 0;
        
        function morphText() {
            const currentWord = element.textContent;
            const nextWord = words[currentWordIndex];
            
            // Animate out
            element.style.transform = 'rotateX(90deg)';
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.textContent = nextWord;
                element.style.transform = 'rotateX(0deg)';
                element.style.opacity = '1';
                currentWordIndex = (currentWordIndex + 1) % words.length;
            }, 250);
        }
        
        element.style.transition = 'all 0.25s ease';
        setInterval(morphText, 3000);
    });
}

// Interactive Cursor Effects
function initializeCustomCursor() {
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'cursor-follower';
    
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.3s ease;
        opacity: 0.5;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = (mouseX - 20) + 'px';
            cursorFollower.style.top = (mouseY - 20) + 'px';
        }, 100);
    });
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .btn, [role="button"]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.2)';
            cursorFollower.style.opacity = '0.8';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.opacity = '0.5';
        });
    });
}

// Scroll Progress Indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Page Transition Effects
function initializePageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Create transition overlay
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--primary-color);
                    z-index: 10000;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s ease;
                `;
                
                document.body.appendChild(overlay);
                
                setTimeout(() => {
                    overlay.style.transform = 'scaleX(1)';
                }, 50);
                
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    overlay.style.transformOrigin = 'right';
                    overlay.style.transform = 'scaleX(0)';
                    
                    setTimeout(() => {
                        overlay.remove();
                    }, 500);
                }, 500);
            }
        });
    });
}

// Performance optimized scroll handler
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add keyframes for animations
const animationCSS = `
@keyframes floatShape {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    25% {
        transform: translateY(-20px) rotate(5deg);
    }
    50% {
        transform: translateY(-10px) rotate(-5deg);
    }
    75% {
        transform: translateY(-30px) rotate(10deg);
    }
}

@keyframes waveAnimation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.custom-cursor,
.cursor-follower {
    display: none;
}

@media (hover: hover) and (pointer: fine) {
    .custom-cursor,
    .cursor-follower {
        display: block;
    }
}
`;

// Inject animation CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = animationCSS;
document.head.appendChild(animationStyle);

// Initialize advanced features
document.addEventListener('DOMContentLoaded', () => {
    //initializeCustomCursor(); //
    initializeScrollProgress();
    initializePageTransitions();
});

// Export functions for external use
window.MoersAnimations = {
    animateText,
    typewriterEffect,
    slideUpAnimation,
    fadeInAnimation,
    scaleInAnimation,
    rotateInAnimation
};