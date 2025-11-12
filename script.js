document.addEventListener('DOMContentLoaded', ()=>{
  // Canvas stars - gentle diagonal movement
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const stars = [];
  for(let i=0;i<240;i++){ stars.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r: Math.random()*1.6+0.2, vx: (Math.random()-0.5)*0.08 + 0.02, vy: 0.08 + Math.random()*0.4}); }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const s of stars){
      ctx.beginPath(); ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      s.x += s.vx; s.y += s.vy;
      if(s.y>canvas.height) s.y = -10;
      if(s.x<0) s.x = canvas.width;
      if(s.x>canvas.width) s.x = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();

  // intro overlay hide after animation
  const intro = document.getElementById('introOverlay');
  if(intro){ setTimeout(()=>{ intro.classList.add('intro-hide'); setTimeout(()=> intro.style.display='none',900); }, 4200); }

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries=>{ entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('visible'); }); }, {threshold:0.12});
  reveals.forEach(r=>obs.observe(r));

  // lightbox element
  const lightbox = document.querySelector('.lightbox');

  // images lightbox
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.addEventListener('click', ()=>{
      if(!lightbox) return;
      const media = document.createElement('img');
      media.src = img.src;
      media.className = 'media';
      lightbox.innerHTML = ''; lightbox.appendChild(media); lightbox.classList.add('show');
    });
  });

  // video play buttons -> open video in lightbox
  document.querySelectorAll('.video-card').forEach(card=>{
    const btn = card.querySelector('.play-btn');
    btn && btn.addEventListener('click', ()=>{
      const src = card.getAttribute('data-src');
      if(!src) return;
      if(!lightbox) return;
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.className = 'media';
      lightbox.innerHTML = ''; lightbox.appendChild(video); lightbox.classList.add('show');
    });
  });

  // close lightbox on click and stop video
  if(lightbox){
    lightbox.addEventListener('click', ()=>{
      const v = lightbox.querySelector('video');
      if(v){ v.pause(); v.currentTime = 0; }
      lightbox.classList.remove('show');
    });
  }
});
