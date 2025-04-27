import { animate } from 'animejs';

// Hero section animations
export const animateHeroElements = () => {
  // Animate title
  const titles = document.querySelectorAll('.hero-title .anime-text');
  titles.forEach((title, index) => {
    animate(title, {
      translateY: [40, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 300 + 30 * index // Delayed animation for each title text
    });
  });

  // Animate subtitle
  const subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    animate(subtitle, {
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 400
    });
  }

  // Animate CTA button
  const ctaButton = document.querySelector('.hero-cta');
  if (ctaButton) {
    animate(ctaButton, {
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 600
    });
  }

  // Animate hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    animate(heroImage, {
      scale: [0.9, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 300
    });
  }
};

// Section title animations
export const animateSectionTitle = (element: string) => {
  const sectionTitle = document.querySelector(element);
  if (sectionTitle) {
    animate(sectionTitle, {
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 200
    });
  }
};

// Card entrance animations (with stagger)
export const animateCards = (elements: string) => {
  const cards = document.querySelectorAll(elements);
  
  cards.forEach((card, index) => {
    animate(card, {
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 300 + (index * 100) // Manual staggering by index
    });
  });
};

// Chart animations
export const animateChartEntrance = (element: string) => {
  const chart = document.querySelector(element);
  if (chart) {
    animate(chart, {
      scale: [0.95, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000
    });
  }
};

// Background gradient animation
export const animateGradientBackground = (element: string) => {
  const backgroundElement = document.querySelector(element);
  if (backgroundElement) {
    animate(backgroundElement, {
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
  }
};

// Animate numbers counting up
export const animateCountUp = (element: string, target: number) => {
  const obj = { count: 0 };
  const el = document.querySelector(element);
  
  if (!el) return;
  
  animate(obj, {
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
        animate(entry.target, {
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
