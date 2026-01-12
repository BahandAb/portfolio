/* ========================================================================
   COMMON FUNCTIONS (Run on all pages)
   ======================================================================== */
function initCommon() {
  // Initialize particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'bounce', bounce: true, attract: { enable: false } }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // --- Custom click and hold attraction effect ---
  (function () {
    const canvasEl = document.getElementById('particles-js');
    if (!canvasEl) return;
    let attractActive = false;
    let mouse = { x: 0, y: 0 };
    const radius = 140;
    const strength = 0.08;

    function getPJS() {
      const pJSDom = window.pJSDom;
      if (!pJSDom || !pJSDom.length) return null;
      const pJS = pJSDom[0].pJS;
      if (!pJS || !pJS.particles || !pJS.particles.array) return null;
      return pJS;
    }

    canvasEl.addEventListener('mousedown', function (e) {
      const pJS = getPJS();
      if (!pJS) return;
      const rect = pJS.canvas.el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      attractActive = true;
    });
    window.addEventListener('mouseup', function () {
      attractActive = false;
    });
    canvasEl.addEventListener('mousemove', function (e) {
      if (!attractActive) return;
      const pJS = getPJS();
      if (!pJS) return;
      const rect = pJS.canvas.el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    function attractLoop() {
      if (attractActive) {
        const pJS = getPJS();
        if (pJS) {
          const startSpeed = pJS.particles.move.speed || 3;
          pJS.particles.array.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < radius && dist > 1) {
              p.vx += (dx / dist) * strength;
              p.vy += (dy / dist) * strength;
            }
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
}

/* ========================================================================
   PROJECTS PAGE (NEW DYNAMIC VERSION)
   ======================================================================== */

// Global variables for the modal
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal-btn');
let currentProjectMedia = [];
let currentMediaIndex = 0;

/**
 * Resolve media source to include local assets prefix when needed.
 */
function resolveMediaSrc(src) {
    if (!src) return 'assets/placeholder.png';
    const isAbsolute = /^https?:\/\//i.test(src) || src.startsWith('data:');
    const alreadyAssets = src.startsWith('assets/');
    return isAbsolute || alreadyAssets ? src : `assets/E-Portfolio/${src}`;
}

/**
 * Main function to build the project grid on page load.
 */
function initProjectsPage() {
    const grid = document.querySelector('.project-grid');
    if (!grid) return; // Exit if we're not on the projects page

    // 1. Loop through the 'projects' array (from projects-data.js)
    projects.forEach(project => {
        // 2. Create an HTML string for each project card
        const card = document.createElement('article');
        card.className = 'project-card';
        card.tabIndex = 0;
        card.setAttribute('data-id', project.id); // Set a data-id
        
        // Use the first image as the thumbnail, or show emojis if no images
        const hasImages = project.images && project.images.length > 0;
        const hasVideos = (project.videos && project.videos.length > 0) || (project.youtubeEmbeds && project.youtubeEmbeds.length > 0);
        const hasMedia = hasImages || hasVideos;
        
        let rawThumb;
        if (hasImages) {
            rawThumb = project.images[0];
        } else if (hasVideos && !project.emojis) {
            // Try to get YouTube thumbnail for first video if no emojis
            const videoSrc = project.videos ? project.videos[0] : project.youtubeEmbeds[0];
            let videoId = '';
            if (videoSrc.includes('youtu.be/')) {
                videoId = videoSrc.split('youtu.be/')[1].split('?')[0];
            } else if (videoSrc.includes('youtube.com/watch?v=')) {
                videoId = videoSrc.split('watch?v=')[1].split('&')[0];
            }
            rawThumb = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'assets/placholders/tile_placeholder';
        } else {
            rawThumb = 'assets/placholders/tile_placeholder';
        }
        const thumbnailUrl = resolveMediaSrc(rawThumb);

        card.innerHTML = `
            <div class="project-media">
                ${hasImages ? `<img src="${thumbnailUrl}" alt="${project.title}" onerror="this.src='assets/placholders/tile_placeholder'" />` : `<div class="project-emoji">${project.emojis ? project.emojis.join(' ') : '📋'}</div>`}
                <div class="card-overlay">
                    <span class="overlay-title">${project.title}</span>
                    <span class="overlay-date">${project.date}</span>
                    ${!hasMedia ? '<span class="overlay-badge no-media">Media Pending</span>' : ''}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.shortDesc}</p>
            </div>
        `;
        
        // 3. Add an event listener to open the modal on click
        card.addEventListener('click', () => openProjectModal(project.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(project.id);
            }
        });

        // 4. Append the new card to the grid
        grid.appendChild(card);
    });

    // 5. Add event listeners for the modal (close button, etc.)
    setupModalListeners();
}

/**
 * Finds a project by its ID and populates the modal.
 */
function openProjectModal(projectId) {
    // Find the project data from our 'projects' array
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Reset media
    currentProjectMedia = [];
    currentMediaIndex = 0;

    // --- 1. Populate Header & Text ---
    const headerEl = modalContent.querySelector('.modal-header');
    headerEl.innerHTML = `<div>${project.title}</div>${project.date ? `<div class="modal-subheader">${project.date}</div>` : ''}`;
    modalContent.querySelector('.modal-text').innerHTML = project.longDesc;
    
    // --- 2. Populate Skills ---
        const skillsContainer = modalContent.querySelector('.modal-skills');
    if (project.skills) {
        const skillsList = project.skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join('');
        skillsContainer.innerHTML = `<h3>Skills</h3><div class="skills-tags">${skillsList}</div>`;
    } else {
        skillsContainer.innerHTML = '';
    }

        // --- 2b. Populate Meta Badges (role / difficulty / collaborators) ---
        const metaContainer = modalContent.querySelector('.modal-meta');
        if (metaContainer) {
            const badges = [];
            if (project.role) badges.push(`<span class="badge role" title="Role"><strong>Role:</strong> ${project.role}</span>`);
            if (project.difficulty) badges.push(`<span class="badge difficulty" title="Difficulty"><strong>Difficulty:</strong> ${project.difficulty}</span>`);
            if (project.collaborators) {
                const collabText = Array.isArray(project.collaborators) ? project.collaborators.join(', ') : project.collaborators;
                badges.push(`<span class="badge collaborators" title="Collaborators"><strong>Collaborators:</strong> ${collabText}</span>`);
            }
            metaContainer.innerHTML = badges.length ? `<div class="info-badges">${badges.join('')}</div>` : '';
        }

    // --- 3. Populate Media Gallery ---
    const mainMediaWrap = modalContent.querySelector('.modal-gallery-main-img-wrap');
    const thumbsContainer = modalContent.querySelector('.modal-gallery-thumbs');
    mainMediaWrap.innerHTML = ''; // Clear old media
    thumbsContainer.innerHTML = ''; // Clear old thumbs

    // Combine images, videos, and youtubeEmbeds into one media array
    currentProjectMedia = [
        ...(project.images || []).map(img => ({ type: 'image', src: resolveMediaSrc(img) })),
        ...(project.videos || []).map(vid => ({ type: 'video', src: vid })),
        ...(project.youtubeEmbeds || []).map(yt => ({ type: 'youtube', src: yt }))
    ];

    if (currentProjectMedia.length > 0) {
        // Create a thumbnail for each media item
        currentProjectMedia.forEach((media, index) => {
                        const thumb = document.createElement('img');
            thumb.className = 'gallery-thumb';
                        // If it's a video, use a placeholder or a YouTube thumbnail
                        if (media.type === 'image') {
                            thumb.src = media.src;
                        } else {
                            // Try YouTube thumbnail if applicable, else fallback
                            let videoId = '';
                            if (media.src.includes('youtu.be/')) {
                                videoId = media.src.split('youtu.be/')[1].split('?')[0];
                            } else if (media.src.includes('youtube.com/watch?v=')) {
                                videoId = media.src.split('watch?v=')[1].split('&')[0];
                            }
                            thumb.src = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'assets/video-placeholder.png';
                        }
            thumb.alt = 'Gallery item';
            thumb.setAttribute('data-index', index);
            thumb.addEventListener('click', () => setModalMedia(index));
            thumbsContainer.appendChild(thumb);
        });

        // Set the first media item
        setModalMedia(0);
        modalContent.querySelector('.modal-gallery').style.display = 'flex';
    } else {
        // Hide gallery if no media
        modalContent.querySelector('.modal-gallery').style.display = 'none';
    }
    
    // --- 4. Populate Links ---
    const linksContainer = modalContent.querySelector('.modal-links');
    linksContainer.innerHTML = ''; // Clear old links
    if (project.links.github) {
        linksContainer.innerHTML += `<a href="${project.links.github}" class="modal-link" target="_blank" rel="noopener">GitHub Repo</a>`;
    }
    if (project.links.youtube) {
        linksContainer.innerHTML += `<a href="${project.links.youtube}" class="modal-link" target="_blank" rel="noopener">YouTube Video</a>`;
    }
    if (project.links.googleDrive) {
        linksContainer.innerHTML += `<a href="${project.links.googleDrive}" class="modal-link" target="_blank" rel="noopener">Google Drive Files</a>`;
    }
    if (project.links.googleDoc) {
        linksContainer.innerHTML += `<a href="${project.links.googleDoc}" class="modal-link" target="_blank" rel="noopener">Project Document</a>`;
    }

    // --- 5. Show Modal ---
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('showing'), 10);
    modalContent.focus(); // Focus for accessibility
}

/**
 * Sets the main modal media element by its index in the currentProjectMedia array.
 */
function setModalMedia(index) {
    const mainMediaWrap = modalContent.querySelector('.modal-gallery-main-img-wrap');
    if (index < 0) index = currentProjectMedia.length - 1;
    if (index >= currentProjectMedia.length) index = 0;

    currentMediaIndex = index;
    const media = currentProjectMedia[index];

    mainMediaWrap.innerHTML = ''; // Clear previous

    if (media.type === 'image') {
        const img = document.createElement('img');
        img.id = 'modal-gallery-main-img';
        img.src = media.src;
        img.alt = 'Project main image';
        mainMediaWrap.appendChild(img);
    } else if (media.type === 'youtube') {
        // Handle YouTube embed links
        let videoId = '';
        if (media.src.includes('youtu.be/')) {
            videoId = media.src.split('youtu.be/')[1].split('?')[0];
        } else if (media.src.includes('youtube.com/watch?v=')) {
            videoId = media.src.split('watch?v=')[1].split('&')[0];
        } else if (media.src.includes('/embed/')) {
            videoId = media.src.split('/embed/')[1].split('"')[0];
        }

        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.title = 'YouTube video player';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            mainMediaWrap.appendChild(iframe);
        }
    } else if (media.type === 'video') {
        // Handle local video files
        let videoId = '';
        if (media.src.includes('youtu.be/')) {
            videoId = media.src.split('youtu.be/')[1].split('?')[0];
        } else if (media.src.includes('youtube.com/watch?v=')) {
            videoId = media.src.split('watch?v=')[1].split('&')[0];
        } else if (media.src.includes('/embed/')) {
            videoId = media.src.split('/embed/')[1].split('"')[0];
        }

        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.title = 'YouTube video player';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            mainMediaWrap.appendChild(iframe);
        } else {
            const videoEl = document.createElement('video');
            videoEl.controls = true;
            videoEl.className = 'modal-video';
            videoEl.src = resolveMediaSrc(media.src);
            mainMediaWrap.appendChild(videoEl);
        }
    }

    // Update active thumbnail
    // Update active thumbnail
    modalContent.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
            
            // --- ADD THIS NEW LINE ---
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            // --- END OF NEW LINE ---

        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Sets up all listeners for the modal (close, arrows, keyboard).
 */
function setupModalListeners() {
    if (!modal) return;

    // Close button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('showing');
        setTimeout(() => modal.classList.add('hidden'), 300); // Wait for animation
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('showing');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    });

    // Arrow buttons
    document.getElementById('modal-arrow-left').addEventListener('click', (e) => {
        e.stopPropagation();
        setModalMedia(currentMediaIndex - 1);
    });
    
    document.getElementById('modal-arrow-right').addEventListener('click', (e) => {
        e.stopPropagation();
        setModalMedia(currentMediaIndex + 1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('showing')) {
            if (e.key === 'Escape') {
                closeBtn.click();
            }
            if (e.key === 'ArrowLeft') {
                setModalMedia(currentMediaIndex - 1);
            }
            if (e.key === 'ArrowRight') {
                setModalMedia(currentMediaIndex + 1);
            }
        }
    });
}
/* ========================================================================
   CONTACT PAGE (Run only on contact.html)
   ======================================================================== */
function initContactPage() {
    const copyBtn = document.getElementById('copy-email-btn');
    const successMsg = document.getElementById('copy-success-msg');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = copyBtn.getAttribute('data-email');
            
            // Use the modern Clipboard API
            navigator.clipboard.writeText(email).then(() => {
                // Success!
                successMsg.style.display = 'inline'; // Show "Copied!"
                copyBtn.disabled = true; // Briefly disable button

                // Hide message after 2.5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                    copyBtn.disabled = false;
                }, 2500);

            }).catch(err => {
                // Log any errors
                console.error('Failed to copy email: ', err);
                // Show a fallback alert if it fails
                alert('Failed to copy. Please manually copy: ' + email);
            });
        });
    }
}

/* ========================================================================
   INITIALIZATION
   ======================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  initCommon(); 

  // Run page-specific logic
  if (window.location.pathname.match(/projects\.html$/) || window.location.pathname === '/') {
   
  }

  if (window.location.pathname.match(/projects\.html$/)) {
    initProjectsPage();
  }
  
  if (window.location.pathname.match(/contact\.html$/)) {
    initContactPage();
  }
  
});