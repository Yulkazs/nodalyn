import anime from 'animejs';

// Hero section animations
export const animateHeroElements = () => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  });

  // Animate title
  timeline.add({
    targets: '.hero-title .anime-text',
    translateY: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1200,
    delay: (el, i) => 300 + 30 * i
  });

  // Animate subtitle
  timeline.add({
    targets: '.hero-subtitle',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: 400
  }, '-=800');

  // Animate CTA button
  timeline.add({
    targets: '.hero-cta',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: 600
  }, '-=800');

  // Animate hero image
  timeline.add({
    targets: '.hero-image',
    scale: [0.9, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 300
  }, '-=1200');
};

// Section title animations
export const animateSectionTitle = (element: string) => {
  anime({
    targets: element,
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: 200
  });
};

// Card entrance animations
export const animateCards = (elements: string) => {
  anime({
    targets: elements,
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: anime.stagger(100, {start: 300})
  });
};

// Chart animations
export const animateChartEntrance = (element: string) => {
  anime({
    targets: element,
    scale: [0.95, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000
  });
};

// Background gradient animation
export const animateGradientBackground = (element: string) => {
  anime({
    targets: element,
    background: [
      'linear-gradient(45deg, rgba(76, 0, 255, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)',
      'linear-gradient(45deg, rgba(76, 0, 255, 0.15) 0%, rgba(0, 123, 255, 0.15) 100%)',
      'linear-gradient(45deg, rgba(76, 0, 255, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)'
    ],
    duration: 3000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });
};

// Animate numbers counting up
export const animateCountUp = (element: string, target: number) => {
  const obj = { count: 0 };
  const el = document.querySelector(element);
  
  if (!el) return;
  
  anime({
    targets: obj,
    count: target,
    round: 1,
    duration: 2000,
    easing: 'easeOutExpo',
    update: () => {
      el.innerHTML = obj.count.toString();
    }
  });
};

// Scroll reveal animation
export const scrollReveal = () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateY: [20, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 800,
          delay: 200
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};