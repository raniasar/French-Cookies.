/* ========================================
   FRENCH COOKIES - JAVASCRIPT PRO
   Animations GSAP, Parallaxe, 3D Effects
   ======================================== */

// === CONFIGURATION ===
gsap.registerPlugin(ScrollTrigger);

// === CUSTOM CURSOR ===
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effect sur les liens et boutons
const hoverElements = document.querySelectorAll('a, button, .product-card-3d');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });
});

// === SCROLL PROGRESS BAR ===
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
});

// === HEADER SCROLL EFFECT ===
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// === BURGER MENU ===
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Fermer le menu au clic sur un lien
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// === PARTICLES.JS CONFIGURATION ===
particlesJS('particles-js', {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#d1a36a'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#d1a36a',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// === HERO ANIMATIONS GSAP ===
gsap.set('.hero-line', { y: 100, opacity: 0 });
gsap.set('.hero-subtitle', { y: 30, opacity: 0 });
gsap.set('.btn-hero', { y: 30, opacity: 0 });

// Timeline Hero
const heroTimeline = gsap.timeline({ delay: 0.5 });

heroTimeline
  .to('.hero-line', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
  .to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  .to('.btn-hero', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, '-=0.4');

// === PARALLAX HERO IMAGE ===
gsap.to('.hero-image', {
  y: 300,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

// === COMPTEURS ANIMÉS ===
const statItems = document.querySelectorAll('.stat-item');

const animateCounter = (element) => {
  const target = parseInt(element.dataset.count);
  const numberElement = element.querySelector('.stat-number');
  
  gsap.to({ val: 0 }, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    onUpdate: function() {
      numberElement.textContent = Math.floor(this.targets()[0].val);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true
    }
  });
};

statItems.forEach(item => animateCounter(item));

// === ABOUT SECTION ANIMATIONS ===
gsap.from('.section-label', {
  x: -50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%'
  }
});

gsap.from('.section-title', {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%'
  }
});

gsap.from('.image-frame', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-container',
    start: 'top 70%'
  }
});

gsap.from('.about-text p', {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.about-content',
    start: 'top 75%'
  }
});

// === VIDEO PLAYER CONTROLS ===
const videoPlayer = document.querySelector('.video-player');
const playBtn = document.querySelector('.play-btn');

if (videoPlayer && playBtn) {
  let isPlaying = false;

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      videoPlayer.pause();
      playBtn.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" stroke="white" stroke-width="2"/>
          <path d="M15 12L28 20L15 28V12Z" fill="white"/>
        </svg>
      `;
    } else {
      videoPlayer.play();
      playBtn.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" stroke="white" stroke-width="2"/>
          <rect x="14" y="12" width="4" height="16" fill="white"/>
          <rect x="22" y="12" width="4" height="16" fill="white"/>
        </svg>
      `;
    }
    isPlaying = !isPlaying;
  });

  // Auto-pause quand la vidéo n'est pas visible
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && isPlaying) {
        videoPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = `
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="white" stroke-width="2"/>
            <path d="M15 12L28 20L15 28V12Z" fill="white"/>
          </svg>
        `;
      }
    });
  }, { threshold: 0.5 });

  videoObserver.observe(videoPlayer);
}

// === ANIMATION VIDEO SECTION ===
gsap.from('.video-container', {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.video-section',
    start: 'top 60%'
  }
});

// === PRODUCTS CARDS 3D TILT EFFECT ===
const productCards = document.querySelectorAll('.product-card-3d');

productCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// === ANIMATION PRODUCTS CARDS ===
gsap.from('.product-card-3d', {
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.products-grid',
    start: 'top 70%'
  }
});

// === CTA SECTION ANIMATION ===
gsap.from('.cta-title', {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 70%'
  }
});

gsap.from('.cta-text', {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 70%'
  }
});

// === FOOTER ANIMATION ===
gsap.from('.footer-col', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 80%'
  }
});

// === SMOOTH SCROLL POUR LES ANCRES ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// === LAZY LOADING IMAGES ===
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// === PERFORMANCE: Désactiver les animations sur mobile si nécessaire ===
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Désactiver toutes les animations GSAP
  gsap.globalTimeline.pause();
  
  // Retirer les transitions CSS
  document.body.style.setProperty('--ease-smooth', 'none');
  document.body.style.setProperty('--ease-bounce', 'none');
}

// === CONSOLE LOG STYLÉ ===
console.log(
  '%c🍪 French Cookies - Version PRO ',
  'background: linear-gradient(135deg, #d1a36a 0%, #e8b471 100%); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px; font-weight: bold;'
);

console.log(
  '%cDéveloppé avec ❤️ par les élèves de 1ère MCV',
  'color: #7b5e40; font-size: 12px; font-style: italic;'
);
