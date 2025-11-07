// Main interactions (no frameworks).
// - Mobile menu toggle
// - Theme (light/dark) toggle with localStorage
// - Simple contact form mock

(function(){
  const root = document.documentElement;
  const body = document.body;

  // Theme toggle (landing)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle){
    const setTheme = (mode) => {
      if(mode === 'dark'){ body.classList.add('dark'); themeToggle.setAttribute('aria-pressed','true'); }
      else { body.classList.remove('dark'); themeToggle.setAttribute('aria-pressed','false'); }
      localStorage.setItem('aliviatech_theme', mode);
    };
    const saved = localStorage.getItem('aliviatech_theme');
    setTheme(saved || 'light');
    themeToggle.addEventListener('click', ()=>{
      const next = body.classList.contains('dark') ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Theme toggle (dashboard)
  const dashTheme = document.getElementById('dashThemeToggle');
  if (dashTheme){
    const setTheme = (mode) => {
      if(mode === 'dark'){ document.body.classList.add('dark'); }
      else { document.body.classList.remove('dark'); }
      localStorage.setItem('aliviatech_theme', mode);
    };
    const saved = localStorage.getItem('aliviatech_theme');
    setTheme(saved || 'light');
    dashTheme.addEventListener('click', ()=>{
      const next = document.body.classList.contains('dark') ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  if(menuBtn && navLinks){
    menuBtn.addEventListener('click', ()=>{
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      menuBtn.setAttribute('aria-expanded', String(!open));
    });
  }

  // Contact form mock
  const submitBtn = document.getElementById('contactSubmit');
  const status = document.getElementById('formStatus');
  if(submitBtn && status){
    submitBtn.addEventListener('click', ()=>{
      const email = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('contactMessage').value.trim();
      if(!email || !msg){ status.textContent = 'Please fill all fields.'; return; }
      status.textContent = 'Thanks! We will contact you soon.';
      setTimeout(()=>{ status.textContent=''; }, 4000);
    });
  }
})();
