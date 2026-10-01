/**
 * My Parishkar - Modern UI & Interactive Visual Effects
 * Inspired by: VantaJS / ThreeUI (Ambient Mesh Canvas), Uiverse.io (3D Glow Buttons), 
 * ReactBits (3D Tilt & Spotlight Cards), and shadcn (Minimalist Dashboard Analytics)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Vanta / Three.js-style ambient particle canvas on heroes
  initAmbientMeshCanvas('heroCanvas', {
    nodeColor: 'rgba(255, 255, 255, 0.45)',
    lineColor: 'rgba(255, 255, 255, 0.12)',
    particleCount: window.innerWidth < 768 ? 30 : 60,
    maxDistance: 130
  });

  initAmbientMeshCanvas('dashHeroCanvas', {
    nodeColor: 'rgba(255, 255, 255, 0.4)',
    lineColor: 'rgba(255, 255, 255, 0.1)',
    particleCount: window.innerWidth < 768 ? 25 : 50,
    maxDistance: 120
  });

  // 2. Initialize ReactBits 3D Card Tilt & Spotlight
  init3DTiltCards('.role-card, .sector-card, .stat-analytic-card');

  // 3. Initialize Uiverse Button Ripple Effects
  initButtonRipples();

  // 4. Animate Numeric Counters on viewport entry
  initCounterAnimations();
});

/**
 * High-performance HTML5 Canvas 3D particle mesh / net (Vanta.js / Three.js aesthetic)
 */
function initAmbientMeshCanvas(canvasId, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.parentElement.offsetWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight;

  const nodeColor = options.nodeColor || 'rgba(255, 255, 255, 0.4)';
  const lineColor = options.lineColor || 'rgba(255, 255, 255, 0.12)';
  const particleCount = options.particleCount || 45;
  const maxDistance = options.maxDistance || 120;

  const particles = [];
  const mouse = { x: -1000, y: -1000, radius: 140 };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.baseRadius = this.radius;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactive push/pull
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 3;
        this.y -= (dy / dist) * force * 3;
        this.radius = this.baseRadius * 1.6;
      } else {
        this.radius = this.baseRadius;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor.replace(/[\d\.]+\)$/g, `${alpha * 0.25})`);
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/**
 * ReactBits-style 3D Tilt with dynamic spotlight & depth
 */
function init3DTiltCards(selector) {
  const cards = document.querySelectorAll(selector);
  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

/**
 * Uiverse.io Ripple & Tactile interaction
 */
function initButtonRipples() {
  const buttons = document.querySelectorAll('.btn, .apply-quick-btn, .calc-cta a, .role-btn');
  buttons.forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ui-ripple-effect');

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/**
 * Animated statistics numbers
 */
function initCounterAnimations() {
  const statNumbers = document.querySelectorAll('.count-animate');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target') || target.innerText.replace(/\D/g, ''), 10);
        const suffix = target.getAttribute('data-suffix') || '';
        if (!isNaN(targetValue)) {
          let current = 0;
          const step = Math.max(1, Math.floor(targetValue / 30));
          const interval = setInterval(() => {
            current += step;
            if (current >= targetValue) {
              target.innerText = targetValue + suffix;
              clearInterval(interval);
            } else {
              target.innerText = current + suffix;
            }
          }, 35);
        }
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(num => observer.observe(num));
}
