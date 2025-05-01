document.addEventListener('DOMContentLoaded', () => {
    // Переключение мобильного меню
    const navToggle = document.getElementById('navToggle');
    const nav = document.querySelector('nav');
    
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
    
    // Переключение темы (dark/light)
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = (theme === 'light') ? 'dark' : 'light';
      setTheme(newTheme);
    });
    
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      themeToggle.textContent = (theme === 'light') ? 'Темная тема' : 'Светлая тема';
    }
    
    // Анимации с GSAP для секции hero
    gsap.to('.hero-content h1', { duration: 1, opacity: 1, y: 0, ease: 'power2.out' });
    gsap.to('.hero-content p', { duration: 1, delay: 0.5, opacity: 1, y: 0, ease: 'power2.out' });
    
    // Google Analytics (простейшая интеграция; убедитесь, что скрипт gtag.js подключен в head)
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Замените на ваш идентификатор
    
  });
  