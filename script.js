// Save theme to localStorage
function saveTheme(theme) {
    localStorage.setItem('userTheme', theme);
  }
  
  // Load theme from localStorage
  function loadTheme() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
  }
  
  // Toggle theme and save preference
  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    saveTheme(newTheme);
  
    // Trigger animation
    animateImage();
  }
  
  // Add animation class and remove it after animation ends
  function animateImage() {
    const img = document.getElementById('animatedImg');
    img.classList.add('animate');
    img.addEventListener('animationend', () => {
      img.classList.remove('animate');
    }, { once: true });
  }
  
  // Attach event listener
  document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
  
  // Load theme on page load
  loadTheme();
  