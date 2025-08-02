document.querySelectorAll('article.project-card').forEach(card => {
  card.addEventListener('click', function () {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    // Example content from the card (you can customize how to get actual project data)
    const title = card.querySelector('h3').innerText;
    const description = card.querySelector('p').innerText;
    const imgSrc = card.querySelector('img').src;
    const imgAlt = card.querySelector('img').alt;

    modalContent.innerHTML = `
      <span id="close-modal">&times;</span>
      <img src="${imgSrc}" alt="${imgAlt}" />
      <h2>${title}</h2>
      <p>${description}</p>
    `;

    modal.style.display = 'block';

    // Close button logic
    document.getElementById('close-modal').onclick = () => {
      modal.style.display = 'none';
    };
  });
});

// Click outside the modal to close
window.onclick = function (event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

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
