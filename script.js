// Dynamic Grid Column Layout
function updateProjectGridColumns() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;
  
  const width = window.innerWidth;
  if (width >= 2400) {
    grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
  } else if (width >= 1800) {
    grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  } else if (width >= 1200) {
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  } else if (width >= 800) {
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else {
    grid.style.gridTemplateColumns = 'repeat(1, 1fr)';
  }
}

// Add event listeners for window resize and initial load
window.addEventListener('resize', updateProjectGridColumns);
document.addEventListener('DOMContentLoaded', updateProjectGridColumns);

// Prevent background scroll when modal is open
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  const body = document.body;
  const observer = new MutationObserver(() => {
    if (!modal.classList.contains('hidden')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });
  observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
});
// --- Fullscreen logic for modal gallery main image/video ---
document.addEventListener('DOMContentLoaded', function () {
  if (!window.location.pathname.match(/projects\.html$/)) return;
  const fsBtn = document.getElementById('modal-fullscreen-btn');
  const mainImg = document.getElementById('modal-gallery-main-img');
  // If you add video support, update this logic to select video as well
  if (!fsBtn || !mainImg) return;
  fsBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    // If main media is a video, use video element
    let media = mainImg;
    // If you add video: media = document.querySelector('#modal-gallery-main-video') || mainImg;
    if (media.requestFullscreen) {
      media.requestFullscreen();
    } else if (media.webkitRequestFullscreen) {
      media.webkitRequestFullscreen();
    } else if (media.msRequestFullscreen) {
      media.msRequestFullscreen();
    }
  });
});


// Make all project cards open the modal with gallery and filler content
function setupProjectCardModals() {
  // Only enable modal gallery for project cards on projects.html
  if (!window.location.pathname.match(/projects\.html$/)) return;
  const cards = document.querySelectorAll('article.project-card');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  if (!cards.length || !modal || !modalContent) return;

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const title = card.querySelector('h3')?.innerText || 'Project Title';
      // Try to infer project folder from image src (e.g., assets/Beginner-Python/0.png)
      const imgEl = card.querySelector('img');
      let imgSrc = imgEl?.getAttribute('src') || 'assets/project1.jpg';
      let projectFolder = null;
      let mediaCount = 0;
      const match = imgSrc.match(/assets\/(.+?)\//);
      if (match) {
        projectFolder = match[1];
        // For now, assume up to 5 images (0.png to 4.png)
        mediaCount = 5;
      }

      // Update modal content (gallery and text)
      modalContent.querySelector('.modal-header').innerText = title;
      // Main image
      const mainImg = modalContent.querySelector('#modal-gallery-main-img');
      // Thumbnails
      const thumbsContainer = modalContent.querySelector('.modal-gallery-thumbs');
      if (projectFolder && thumbsContainer) {
        // Clear existing thumbs
        thumbsContainer.innerHTML = '';
        for (let i = 0; i < mediaCount; i++) {
          const thumb = document.createElement('img');
          thumb.src = `assets/${projectFolder}/${i}.png`;
          thumb.alt = `Gallery Thumb ${i}`;
          thumb.setAttribute('data-media-index', i);
          if (i === 0) thumb.classList.add('active');
          thumbsContainer.appendChild(thumb);
        }
      }
      // Set main image to first in gallery
      if (mainImg && projectFolder) {
        mainImg.src = `assets/${projectFolder}/0.png`;
        mainImg.setAttribute('data-media-index', 0);
      } else if (mainImg) {
        mainImg.src = imgSrc;
      }

      // Modal text (unique per project)
      const modalText = modalContent.querySelector('.modal-text');
      const extendedDesc = card.querySelector('.project-extended-desc');
      if (modalText) {
        if (extendedDesc) {
          modalText.innerHTML = extendedDesc.innerHTML;
        } else {
          modalText.innerHTML = `<p>No extended description provided for this project.</p>`;
        }
      }

      // Re-attach click handlers to gallery thumbs so they update main image and active state, using data-media-index
      const thumbs = modalContent.querySelectorAll('.modal-gallery-thumbs img');
      function setActive(index) {
        if (index < 0 || index >= thumbs.length) return;
        thumbs.forEach(t => t.classList.remove('active'));
        thumbs[index].classList.add('active');
        if (mainImg) {
          mainImg.src = thumbs[index].src;
          mainImg.setAttribute('data-media-index', thumbs[index].getAttribute('data-media-index'));
        }
        thumbs[index].focus();
      }
      thumbs.forEach((thumb, i) => {
        thumb.onclick = function () {
          setActive(i);
        };
      });

      // Fix arrow navigation to always update main image and active state, using data-media-index
      const arrowLeft = modalContent.querySelector('#modal-arrow-left');
      const arrowRight = modalContent.querySelector('#modal-arrow-right');
      function getActiveIndex() {
        return Array.from(thumbs).findIndex(t => t.classList.contains('active'));
      }
      if (arrowLeft) {
        arrowLeft.onclick = function(e) {
          e.stopPropagation();
          let idx = getActiveIndex();
          setActive((idx - 1 + thumbs.length) % thumbs.length);
        };
      }
      if (arrowRight) {
        arrowRight.onclick = function(e) {
          e.stopPropagation();
          let idx = getActiveIndex();
          setActive((idx + 1) % thumbs.length);
        };
      }

      // Show modal with animation
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('showing'), 10);
    });
  });
}

document.addEventListener('DOMContentLoaded', setupProjectCardModals);

// Gallery lightbox logic (in-modal, not a second modal)
document.addEventListener('DOMContentLoaded', function () {
  // Only run on projects.html
  if (!window.location.pathname.match(/projects\.html$/)) return;
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;
  const closeBtn = document.getElementById('close-modal-btn');
  const arrowLeft = document.getElementById('modal-arrow-left');
  const arrowRight = document.getElementById('modal-arrow-right');
  const mainImg = modalContent.querySelector('#modal-gallery-main-img');
  const thumbs = Array.from(modalContent.querySelectorAll('.modal-gallery-thumbs img'));

  // Helper: get current active index
  function getActiveIndex() {
    return thumbs.findIndex(t => t.classList.contains('active'));
  }
  // Helper: set active by index
  function setActive(index) {
    if (index < 0 || index >= thumbs.length) return;
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
    if (mainImg) mainImg.src = thumbs[index].src;
    thumbs[index].focus();
  }

  // Arrow navigation
  if (arrowLeft) {
    arrowLeft.onclick = function(e) {
      e.stopPropagation();
      let idx = getActiveIndex();
      setActive((idx - 1 + thumbs.length) % thumbs.length);
    };
  }
  if (arrowRight) {
    arrowRight.onclick = function(e) {
      e.stopPropagation();
      let idx = getActiveIndex();
      setActive((idx + 1) % thumbs.length);
    };
  }

  // Keyboard navigation (left/right arrows, escape)
  document.addEventListener('keydown', function (e) {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
      closeBtn && closeBtn.focus();
    } else if (e.key === 'ArrowLeft') {
      let idx = getActiveIndex();
      setActive((idx - 1 + thumbs.length) % thumbs.length);
    } else if (e.key === 'ArrowRight') {
      let idx = getActiveIndex();
      setActive((idx + 1) % thumbs.length);
    }
  });

  // Click outside modal-content closes modal
  modal && modal.addEventListener('mousedown', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.add('hidden');
      closeBtn.blur();
    };
  }

  // Gallery thumbnail logic (update main image only)
  thumbs.forEach((thumb, i) => {
    thumb.setAttribute('tabindex', '0');
    thumb.addEventListener('click', function () {
      setActive(i);
    });
    thumb.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        setActive(i);
      }
    });
  });

  // Focus trap in modal
  modal.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // When modal opens, focus modal content
  const observer = new MutationObserver(() => {
    if (!modal.classList.contains('hidden')) {
      setTimeout(() => { modalContent.focus(); }, 50);
    }
  });
  observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
});



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
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'  // causes lines to follow cursor
      },
      onclick: {
        enable: true,
        mode: 'push'  // adds particles on click
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});


// --- Custom click and hold attraction effect ---
(function() {
  const canvasEl = document.getElementById('particles-js');
  let attractActive = false;
  let mouse = { x: 0, y: 0 };
  const radius = 140; // px, area of effect
  const strength = 0.08; // attraction strength (smaller = gentler)

  // Helper to get particles.js instance
  function getPJS() {
    const pJSDom = window.pJSDom;
    if (!pJSDom || !pJSDom.length) return null;
    const pJS = pJSDom[0].pJS;
    if (!pJS || !pJS.particles || !pJS.particles.array) return null;
    return pJS;
  }

  // Mouse events
  canvasEl.addEventListener('mousedown', function(e) {
    const pJS = getPJS();
    if (!pJS) return;
    const rect = pJS.canvas.el.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    attractActive = true;
  });
  window.addEventListener('mouseup', function() {
    attractActive = false;
  });
  canvasEl.addEventListener('mousemove', function(e) {
    if (!attractActive) return;
    const pJS = getPJS();
    if (!pJS) return;
    const rect = pJS.canvas.el.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  // Animation loop for attraction
  function attractLoop() {
    if (attractActive) {
      const pJS = getPJS();
      if (pJS) {
        const startSpeed = pJS.particles.move.speed || 3;
        pJS.particles.array.forEach(p => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < radius && dist > 1) {
            // Add a small velocity toward mouse
            p.vx += (dx / dist) * strength;
            p.vy += (dy / dist) * strength;
          }
          // Clamp speed to starting speed
          const v = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (v > startSpeed) {
            p.vx = (p.vx / v) * startSpeed;
            p.vy = (p.vy / v) * startSpeed;
          }
        });
      }
    }
    requestAnimationFrame(attractLoop);
  }
  attractLoop();
})();
